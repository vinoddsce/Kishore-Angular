import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input() id: number;
  @Input() name: string;
  @Input() course: string;
  @Input() fees: number;


}
