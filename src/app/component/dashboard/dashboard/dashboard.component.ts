import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  name:any="user";
  balance:any=" 0.00000"
  profit:any=" 0";
  withdraw:any=" 0";

}
