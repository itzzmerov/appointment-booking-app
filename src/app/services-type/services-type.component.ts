import { Component, OnInit } from '@angular/core';
import { ServicesTypeService } from './services-type.service';

@Component({
  selector: 'app-services-type',
  templateUrl: './services-type.component.html',
  styleUrls: ['./services-type.component.css']
})
export class ServicesTypeComponent implements OnInit {
  appointments: any[] = [];

  constructor(private appointmentService: ServicesTypeService) { }

  ngOnInit() {
    this.appointmentService.getAppointments()
      .subscribe((data: any[]) => {
        this.appointments = data;
      });
  }
}