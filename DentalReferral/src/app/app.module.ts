import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewReferralComponent} from './components/new-referral/new-referral.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ActiveReferralsComponent} from './components/active-referrals/active-referrals.component';
import {UpdatesComponent} from './components/updates/updates.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { NewReferralDetailsComponent } from './components/new-referral/new-referral-details/new-referral-details.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { NewPatientDetailsComponent } from './components/new-referral/new-patient-details/new-patient-details.component';
import { NewOfficeDetailsComponent } from './components/new-referral/new-office-details/new-office-details.component';
import {MatStepperModule} from "@angular/material/stepper";
import { AdminComponent } from './components/admin/admin.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    NewReferralComponent,
    ActiveReferralsComponent,
    UpdatesComponent,
    NewReferralDetailsComponent,
    NewPatientDetailsComponent,
    NewOfficeDetailsComponent,
    AdminComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        NgxMaskPipe,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatStepperModule,
        MatTableModule,
        MatSortModule,
        MatExpansionModule
    ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
