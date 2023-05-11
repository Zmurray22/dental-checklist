import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-referral-details',
  templateUrl: './new-referral-details.component.html',
  styleUrls: ['./new-referral-details.component.css']
})
export class NewReferralDetailsComponent {

  detailsForm = new FormGroup({
  reason: new FormControl('', Validators.maxLength(100)),
  details: new FormControl('', Validators.maxLength(500)),
  history: new FormControl('', Validators.maxLength(500)),
  existingApt: new FormControl(false),
  callBefore: new FormControl(false)
  });
}
