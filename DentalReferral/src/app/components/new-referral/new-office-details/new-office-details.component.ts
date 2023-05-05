import {Component} from '@angular/core';
import {HOME_OFFICE_DR, REFERRED_DR} from "../../../../assets/constants";

@Component({
  selector: 'app-new-office-details',
  templateUrl: './new-office-details.component.html',
  styleUrls: ['./new-office-details.component.css']
})
export class NewOfficeDetailsComponent {

  protected readonly HOME_OFFICE_DR = HOME_OFFICE_DR;
  protected readonly REFERRED_DR = REFERRED_DR;
}
