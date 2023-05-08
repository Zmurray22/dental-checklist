import {Office} from "./office";
import {Patient} from "./patient";

export class ReferralDetails {

  reason: string;
  reasonDetails: string;
  historyDetails: string;
  existingApt: boolean;
  callDrBeforeTreatment: boolean;
  radiographStatus: string;
  report: string;
  signedDate: string;
  permanentTeethGraph: string[];
  deciduousTeethGraph: string[];
  mainOffice: Office;
  referredOffice: Office;
  patient: Patient;

  constructor(reason: string, reasonDetails: string, historyDetails: string, existingApt: boolean, callDrBeforeTreatment: boolean, radiographStatus: string, report: string, signedDate: string, permanentTeethGraph: string[], deciduousTeethGraph: string[], mainOffice: Office, referredOffice: Office, patient: Patient) {
    this.reason = reason;
    this.reasonDetails = reasonDetails;
    this.historyDetails = historyDetails;
    this.existingApt = existingApt;
    this.callDrBeforeTreatment = callDrBeforeTreatment;
    this.radiographStatus = radiographStatus;
    this.report = report;
    this.signedDate = signedDate;
    this.permanentTeethGraph = permanentTeethGraph;
    this.deciduousTeethGraph = deciduousTeethGraph;
    this.mainOffice = mainOffice;
    this.referredOffice = referredOffice;
    this.patient = patient;
  }
}
