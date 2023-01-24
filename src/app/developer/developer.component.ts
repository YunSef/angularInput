import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  developer : Developer = {
    lastName : 'Blonski',
    firstName : 'Sébastien',
    age : 46,
    gender : 'Male',
    skills : [
      { name : 'Javascript', logo : 'js.png', site : 'http//js.com' },
      { name : 'Angular' , logo : 'angular.png', site : 'http//angular.io' }
    ]
  }


  

}
