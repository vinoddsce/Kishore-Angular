import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  @Input() deptName: string = '';
  @Output() addStudent = new EventEmitter<string>();
  stdName: string = '';

  onAddStudentClicked(event: MouseEvent) {
    this.addStudent.emit(this.stdName);
  }
}
