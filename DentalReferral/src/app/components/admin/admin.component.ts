import { Component } from '@angular/core';
import {REFERRAL_FORM} from "../../../assets/constants";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

    protected readonly REFERRAL_FORM = REFERRAL_FORM;
}
