import {Component, OnInit, ViewChild} from '@angular/core';
import {REFERRAL_FORM} from "../../../assets/constants";
import {NewOfficeDetailsComponent} from "./new-office-details/new-office-details.component";
import {NewPatientDetailsComponent} from "./new-patient-details/new-patient-details.component";
import {NewReferralDetailsComponent} from "./new-referral-details/new-referral-details.component";
import {ReferralDetails} from "../../model/referral-details";

@Component({
  selector: 'app-new-referral',
  templateUrl: './new-referral.component.html',
  styleUrls: ['./new-referral.component.css']
})
export class NewReferralComponent implements OnInit{

  @ViewChild(NewOfficeDetailsComponent) office: NewOfficeDetailsComponent | any;
  @ViewChild(NewPatientDetailsComponent) patient: NewPatientDetailsComponent | any;
  @ViewChild(NewReferralDetailsComponent) details: NewReferralDetailsComponent | any;

  protected readonly REFERRAL_FORM = REFERRAL_FORM;

  constructor() {

  }

  ngOnInit() {

  }

  submitForm() {
    if(this.office.officeForm.valid && this.patient.patientForm.valid && this.details.detailsForm.valid) {
      this.buildForm(this.office.officeForm, this.patient.patientForm, this.details.detailsForm);
    }else {
      console.log("There was an issue with submit");
    }
  }

  buildForm(office: any, patient: any, details: any) {
    let newForm = new ReferralDetails();
    // console.log(office.controls['primaryDoctor'].value)

    newForm.mainOffice.drName = office.controls['primaryDoctor'].value;
    newForm.mainOffice.location = office.controls['officeLocation'].value;
    newForm.referredOffice.drName = office.controls['referredDoctor'].value;

    newForm.patient.firstName = patient.controls['patientFname'].value;
    newForm.patient.lastName = patient.controls['patientLname'].value;
    newForm.patient.dob = patient.controls['dob'].value;
    newForm.patient.phoneNumber = patient.controls['patientPhone'].value;
    newForm.patient.email = patient.controls['patientEmail'].value;
    newForm.patient.guardian = patient.controls['guardian'].value;

    newForm.patient.address.street = patient.controls['patientAddress'].value;
    newForm.patient.address.streetOpt = patient.controls['patientAddressOpt'].value;
    newForm.patient.address.city = patient.controls['city'].value;
    newForm.patient.address.state = patient.controls['state'].value;
    newForm.patient.address.zipCode = patient.controls['zipcode'].value;

    newForm.reason = details.controls['reason'].value;
    newForm.reasonDetails = details.controls['details'].value;
    newForm.historyDetails = details.controls['history'].value;
    newForm.existingApt = details.controls['existingApt'].value;
    newForm.callDrBeforeTreatment = details.controls['callBefore'].value;

    console.log(newForm)
  }
}
