import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SpecializationComponent } from '../specialization/specialization.component';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoSpecialization(){
    this.router.navigate(['/specialization']);  // define your component where you want to go
}

}
