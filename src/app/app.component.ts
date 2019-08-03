import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My First Angular App !!!!!';
  departmentName: string = "Pre-Unverisity";


  changeDepartmentName(event: string) {
    console.log("changeDepartmentName() called !!!!", event);
    this.departmentName = event;
  }
}
