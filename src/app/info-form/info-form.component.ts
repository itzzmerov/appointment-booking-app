import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent {
  name = '';
  mobile = '';
  email = '';
  remarks = '';
  selectedTimeslot = '';
  selectedDate = '';
  appointmentName = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.appointmentName = params['appointmentName'];
      this.selectedDate = params['selectedDate'];
      this.selectedTimeslot = params['selectedTimeslot'];
    });
  }

  proceedToSummary() {
    const queryParams = {
      appointmentName: this.appointmentName,
      selectedDate: this.selectedDate,
      selectedTimeslot: this.selectedTimeslot,
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      remarks: this.remarks
    };

    this.router.navigate(['/summary'], { queryParams });
  }

  isFormValid(): boolean {
    return this.name !== '' && this.mobile !== '';
  }
}
