import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'registrationForm';
  Courses=['Python' ,'Java', 'C++','Php','JavaScript','Angulor', 'React'];
  StudentObj=new Student("dinesh","dinesh@gmail.com",8817048018,"python","Evening",true,"Satna")
}
