import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewReferralComponent } from './new-referral/new-referral.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ActiveReferralsComponent } from './active-referrals/active-referrals.component';
import { UpdatesComponent } from './updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReferralComponent,
    ActiveReferralsComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
