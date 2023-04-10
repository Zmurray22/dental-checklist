import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {REFERRAL_FORM, US_STATES} from "../../assets/constants";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-new-referral',
  templateUrl: './new-referral.component.html',
  styleUrls: ['./new-referral.component.css']
})
export class NewReferralComponent implements OnInit{

  protected readonly REFERRAL_FORM = REFERRAL_FORM;
  newRefForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    state: new FormControl('', [Validators.maxLength(2)]),
  });

  constructor() {

  }

  filteredOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit() {

    this.filteredOptions = this.newRefForm.get('state')!.valueChanges.pipe(
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

  clearField(field: string): void {
    this.newRefForm.get(field)?.setValue('');
  }
}
