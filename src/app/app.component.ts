import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My First Angular App !!!!!';
  stdName: string = '';

  addStudentName(event: string) {
    console.log("addStudentName() called !!!!", event);
    this.stdName = event;
  }
}
