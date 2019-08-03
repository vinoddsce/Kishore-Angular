import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  @Input() deptName: string = '';

  @Output() changeName = new EventEmitter<string>()

  onChangeClicked(event: MouseEvent) {
    // console.log("Clicked !!!!", event);M
    this.changeName.emit("PUC");

  }


}
