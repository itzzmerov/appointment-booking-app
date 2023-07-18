import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentName: string = '';
  appointmentDescription: string = '';

  appointmentTimeslots: any[] = [];
  appointments: any[] = [];
  appointmentDates: any[] = [];

  selectedDate: string = '';

  currentCarouselIndex = 0;

  selectedTimeslot: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService
    ) { }

  ngOnInit() {
    this.appointmentService.getAppointments()
      .subscribe((data: any[]) => {
        this.appointments = data;
    });

    this.route.params.subscribe(params => {
      this.appointmentName = params['name'];
      this.appointmentDescription = params['description'];

      this.appointmentService.getAppointments()
        .subscribe((data: any[]) => {
          const appointment = data.find(appt => appt.name === this.appointmentName);
          if (appointment) {
            this.appointmentTimeslots = appointment.operatingDays[0][1].timeslot;
          } else {
            this.appointmentTimeslots = [];
          }
      });
    });

    this.populateAppointmentDates();
  }

  selectTimeslot(timeslot: string) {
    this.selectedTimeslot = timeslot;
  
    console.log('Selected Timeslot:', this.selectedTimeslot);
  }

  populateAppointmentDates() {
    const today = new Date();
    const next15Days = new Date();
    next15Days.setDate(today.getDate() + 365);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    while (today <= next15Days) {
      const appointmentDate = {
        month: months[today.getMonth()],
        day: today.getDate(),
        dayName: '',
        isToday: false
      };

      if (today.toDateString() === new Date().toDateString()) {
        appointmentDate.dayName = 'Today';
        appointmentDate.isToday = true;
      } else if (today.toDateString() === new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString()) {
        appointmentDate.dayName = 'Tomorrow';
      } else {
        appointmentDate.dayName = days[today.getDay()];
      }

      this.appointmentDates.push(appointmentDate);

      today.setDate(today.getDate() + 1);
    }
  }

  moveCarousel(direction: number) {
    const carousel = document.querySelector('.carousel') as HTMLElement | null;
    if (!carousel) {
      return;
    }
  
    const carouselWidth = carousel.offsetWidth;
    const maxCarouselIndex = this.appointmentDates.length - 1;
  
    let targetIndex = this.currentCarouselIndex + direction;
  
    // Limit the carousel movement to the first and last item
    if (targetIndex < 0) {
      targetIndex = 0;
    } else if (targetIndex > maxCarouselIndex) {
      targetIndex = maxCarouselIndex;
    }
  
    this.currentCarouselIndex = targetIndex;
  
    const translateX = -carouselWidth * this.currentCarouselIndex;
    carousel.style.transform = `translateX(${translateX}px)`;
  }

  selectDate(date: any) {
    this.appointmentDates.forEach((d) => {
      d.isActive = false;
    });
  
    date.isActive = true;
    this.selectedDate = `${date.month} ${date.day}, ${new Date().getFullYear()}`;
  
    const dayOfWeek = new Date(this.selectedDate).getDay();
    console.log('Selected Date:', this.selectedDate);
    console.log('Day of Week:', dayOfWeek);
  
    this.fetchTimeslots();
  }

  fetchTimeslots() {
    this.appointmentService.getAppointments().subscribe((data: any[]) => {
      const appointment = data.find(appt => appt.name === this.appointmentName);
      if (appointment) {
        const operatingDays = appointment.operatingDays;
        const dayOfWeek = new Date(this.selectedDate).getDay();
        const timeslots = operatingDays[dayOfWeek].timeslot.map((slot: any) => {
          const time = new Date(slot.time);
          const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
          return formattedTime;
        });
        this.appointmentTimeslots = timeslots;
      } else {
        this.appointmentTimeslots = [];
      }
    });
  }

  proceedToInfoForm() {
    const queryParams = {
      appointmentName: this.appointmentName,
      selectedDate: this.selectedDate,
      selectedTimeslot: this.selectedTimeslot
    };
  
    this.router.navigate(['/info-form'], { queryParams });
  }
}
