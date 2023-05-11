import {Address} from "./address";

export class Patient {

  private _firstName: string;
  private _lastName: string;
  private _dob: Date;
  private _phoneNumber: string;
  private _email: string;
  private _address: Address;
  private _guardian: string;

  constructor(firstName?: string, lastName?: string, birthday?: Date, phoneNumber?: string, email?: string, address?: Address, guardian?: string) {
    this._firstName = firstName ? firstName : "";
    this._lastName = lastName ? lastName : "";
    this._dob = birthday ? birthday : new Date("00-00-00");
    this._phoneNumber = phoneNumber ? phoneNumber : "";
    this._email = email ? email : "";
    this._address = address ? address : new Address();
    this._guardian = guardian ? guardian : "";
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get dob(): Date {
    return this._dob;
  }

  set dob(value: Date) {
    this._dob = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get guardian(): string {
    return this._guardian;
  }

  set guardian(value: string) {
    this._guardian = value;
  }
}
