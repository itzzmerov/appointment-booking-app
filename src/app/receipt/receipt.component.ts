import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  name = '';
  mobile = '';
  email = '';
  remarks = '';
  referenceNumber: string = '';

  selectedTimeslot = '';
  selectedDate = '';
  appointmentName = '';

  constructor(private route: ActivatedRoute) {}

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
  
    this.referenceNumber = this.generateReferenceNumber();
  }

  generateReferenceNumber() {
    const prefix = 'BNX';
    const randomNum = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
  
    return prefix + randomNum.toString();
  }
}