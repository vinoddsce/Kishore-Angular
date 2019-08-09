import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  @Input() deptName: string = '';
  @Output() addStudent = new EventEmitter<Student>();
  stdName: string = '';
  stdCourse: string = '';
  stdFees: number = 0;

  onAddStudentClicked(event: MouseEvent) {
    this.addStudent.emit({ name: this.stdName, course: this.stdCourse, fees: this.stdFees });
  }
}
