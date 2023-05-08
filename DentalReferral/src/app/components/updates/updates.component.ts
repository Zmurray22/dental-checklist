import {AfterViewInit, Component} from '@angular/core';
import {REFERRAL_FORM} from "../../../assets/constants";

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements AfterViewInit{

    protected readonly REFERRAL_FORM = REFERRAL_FORM;
  updateList: string[] = ["Bob", "Jay", "Zach", "Valerie", "Aiven", "Asher", "Jesse", "Tony", "Junior", "Bob", "Jay",
    "Zach", "Valerie", "Aiven", "Asher", "Jesse", "Tony", "Junior"];

  ngAfterViewInit() {
  }
}
