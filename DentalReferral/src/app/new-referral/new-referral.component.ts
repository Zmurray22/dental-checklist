import { Component } from '@angular/core';
import {REFERRAL_FORM} from "../../assets/constants";

@Component({
  selector: 'app-new-referral',
  templateUrl: './new-referral.component.html',
  styleUrls: ['./new-referral.component.css']
})
export class NewReferralComponent {

  protected readonly REFERRAL_FORM = REFERRAL_FORM;
}
