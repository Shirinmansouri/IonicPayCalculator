import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  NumberOfHoursWorked : number
  HourlyRate : number
  regularPay : number
  overtimePay : number
  totalPay : number
  tax : number

  CalculatePay() {
   if (this.NumberOfHoursWorked<=40)
   {
     this.regularPay = this.NumberOfHoursWorked * this.HourlyRate
     this.totalPay = this.regularPay
     this.overtimePay = 0.0
   }
   else
   {
    this.regularPay  = 40 * this.HourlyRate
    this.overtimePay = (this.NumberOfHoursWorked - 40) * this.HourlyRate *1.5 
    this.totalPay = this.overtimePay+ this.regularPay 
   }
   this.tax=  this.totalPay  * 0.18 
 
 }
    
  
}
