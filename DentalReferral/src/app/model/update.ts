import {ReferralDetails} from "./referral-details";
export class Update {

  private latestUpdate: Date;
  private referralDetails: ReferralDetails;
  private changes: String[];


  constructor(latestUpdate: Date, referralDetails: ReferralDetails, changes: String[]) {
    this.latestUpdate = latestUpdate;
    this.referralDetails = referralDetails;
    this.changes = changes;
  }
}
