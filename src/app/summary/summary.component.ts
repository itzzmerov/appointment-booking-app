import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  name = ''; // Add an initial value here
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
      this.name = params['name'];
      this.mobile = params['mobile'];
      this.email = params['email'];
      this.remarks = params['remarks'] || undefined;
    });
  }

  proceedToReceipt() {
    const queryParams = {
      appointmentName: this.appointmentName,
      selectedDate: this.selectedDate,
      selectedTimeslot: this.selectedTimeslot,
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      remarks: this.remarks
    };

    this.router.navigate(['/receipt'], { queryParams });
  }
}
