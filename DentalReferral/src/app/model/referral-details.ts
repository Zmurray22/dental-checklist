import {Office} from "./office";
import {Patient} from "./patient";

export class ReferralDetails {

  private _mainOffice: Office;
  private _referredOffice: Office;
  private _patient: Patient;
  private _reason: string;
  private _reasonDetails: string;
  private _historyDetails: string;
  private _existingApt: boolean;
  private _callDrBeforeTreatment: boolean;
  //future form inputs
  private _radiographStatus: string;
  private _report: string;
  private _signedDate: string;
  private _permanentTeethGraph: string[];
  private _deciduousTeethGraph: string[];

  constructor(mainOffice?: Office, referredOffice?: Office, patient?: Patient, reason?: string, reasonDetails?: string, historyDetails?: string, existingApt?: boolean, callDrBeforeTreatment?: boolean, radiographStatus?: string, report?: string, signedDate?: string, permanentTeethGraph?: string[], deciduousTeethGraph?: string[]) {
    this._mainOffice = mainOffice ? mainOffice : new Office();
    this._referredOffice = referredOffice ? referredOffice : new Office();
    this._patient = patient ? patient : new Patient();
    this._reason = reason ? reason : "";
    this._reasonDetails = reasonDetails ? reasonDetails : "";
    this._historyDetails = historyDetails ? historyDetails : "";
    this._existingApt = existingApt ? existingApt : false;
    this._callDrBeforeTreatment = callDrBeforeTreatment ? callDrBeforeTreatment : false;
    //future form inputs
    this._radiographStatus = radiographStatus ? radiographStatus : "";
    this._report = report ? report : "";
    this._signedDate = signedDate ? signedDate : "";
    this._permanentTeethGraph = permanentTeethGraph ? permanentTeethGraph : [];
    this._deciduousTeethGraph = deciduousTeethGraph ? deciduousTeethGraph : [];
  }


  get mainOffice(): Office {
    return this._mainOffice;
  }

  set mainOffice(value: Office) {
    this._mainOffice = value;
  }

  get referredOffice(): Office {
    return this._referredOffice;
  }

  set referredOffice(value: Office) {
    this._referredOffice = value;
  }

  get patient(): Patient {
    return this._patient;
  }

  set patient(value: Patient) {
    this._patient = value;
  }

  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

  get reasonDetails(): string {
    return this._reasonDetails;
  }

  set reasonDetails(value: string) {
    this._reasonDetails = value;
  }

  get historyDetails(): string {
    return this._historyDetails;
  }

  set historyDetails(value: string) {
    this._historyDetails = value;
  }

  get existingApt(): boolean {
    return this._existingApt;
  }

  set existingApt(value: boolean) {
    this._existingApt = value;
  }

  get callDrBeforeTreatment(): boolean {
    return this._callDrBeforeTreatment;
  }

  set callDrBeforeTreatment(value: boolean) {
    this._callDrBeforeTreatment = value;
  }

  get radiographStatus(): string {
    return this._radiographStatus;
  }

  set radiographStatus(value: string) {
    this._radiographStatus = value;
  }

  get report(): string {
    return this._report;
  }

  set report(value: string) {
    this._report = value;
  }

  get signedDate(): string {
    return this._signedDate;
  }

  set signedDate(value: string) {
    this._signedDate = value;
  }

  get permanentTeethGraph(): string[] {
    return this._permanentTeethGraph;
  }

  set permanentTeethGraph(value: string[]) {
    this._permanentTeethGraph = value;
  }

  get deciduousTeethGraph(): string[] {
    return this._deciduousTeethGraph;
  }

  set deciduousTeethGraph(value: string[]) {
    this._deciduousTeethGraph = value;
  }
}
