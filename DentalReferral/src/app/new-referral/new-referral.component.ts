import {Component, OnInit} from '@angular/core';
import {REFERRAL_FORM, US_STATES} from "../../assets/constants";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-new-referral',
  templateUrl: './new-referral.component.html',
  styleUrls: ['./new-referral.component.css']
})
export class NewReferralComponent implements OnInit{

  protected readonly REFERRAL_FORM = REFERRAL_FORM;
  newRefForm: FormGroup;
  homeOfficeDrs: string[] = [
    "Oefinger",
    "Clark"
  ];

  referredDrs: string[] = [
    "Billy",
    "Joe",
    "Bob",
    "Frank"
  ]

  constructor() {
    this.newRefForm = new FormGroup({
      email: new FormControl('email', [Validators.required, Validators.email]),
      state: new FormControl('', [Validators.required, Validators.email]),

    });
  }

  filteredOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit() {


    this.filteredOptions = this.newRefForm.controls.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toUpperCase();

    return US_STATES.filter(option => option.toUpperCase().includes(filterValue));
  }

  getErrorMessage() {
    if (this.newRefForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.newRefForm.hasError('email') ? 'Not a valid email' : '';
  }
}
