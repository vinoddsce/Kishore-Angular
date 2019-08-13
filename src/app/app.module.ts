import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student-list/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentListComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
