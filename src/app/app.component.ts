import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My First Angular App !!!!!';
  students: Student[] = [];
  count: number = 0;

  addStudentName(event: Student) {
    console.log("addStudentName() called !!!!", event);
    this.students.push(event);
    this.count = this.students.length;
    console.log("App - students !!!!", this.students);
  }
}
