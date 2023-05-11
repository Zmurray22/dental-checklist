import {Component} from '@angular/core';
import {US_STATES} from "../../../../assets/constants";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-patient-details',
  templateUrl: './new-patient-details.component.html',
  styleUrls: ['./new-patient-details.component.css']
})
export class NewPatientDetailsComponent {

  protected readonly US_STATES = US_STATES;

  patientForm = new FormGroup({
  patientFname: new FormControl('', Validators.required),
  patientLname: new FormControl('', Validators.required),
  dob: new FormControl(Date, Validators.required),
  guardian: new FormControl(''),
  patientPhone: new FormControl(''),
  patientEmail: new FormControl('', Validators.email),
  patientAddress: new FormControl(''),
  patientAddressOpt: new FormControl(''),
  city: new FormControl(''),
  state: new FormControl('', [Validators.maxLength(2), Validators.minLength(2)]),
  zipcode: new FormControl('')
  });

}
