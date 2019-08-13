import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnChanges, OnInit, DoCheck {

  @Input() students: Student[] = [];
  @Input() count: 0;

  previousValue: Student[] = [];

  constructor() {
    console.log("StudentListComponent -> constructor()");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("StudentListComponent -> ngOnChanges(changes: SimpleChanges)", changes);
  }

  ngOnInit() {
    console.log("StudentListComponent -> ngOnInit");
    this.previousValue.concat(this.students);
  }

  ngDoCheck() {
    if (this.previousValue.length === this.students.length) {
      console.log("StudentListComponent -> ngDoCheck: NO CHANGES");
    } else {
      console.log("StudentListComponent -> ngDoCheck: THERE IS CHANGES", this.students);
      this.previousValue.concat(this.students);
    }
  }
}
