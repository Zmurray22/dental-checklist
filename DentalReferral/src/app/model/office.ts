import {Address} from "./address";

export class Office {

  private _location: string;
  private _phoneNumber: string;
  private _fax: string;
  private _address: Address;
  private _email: string;
  private _drName: string;

  constructor(location: string, phoneNumber: string, fax: string, address: Address, email: string, drName: string) {
    this._location = location;
    this._phoneNumber = phoneNumber;
    this._fax = fax;
    this._address = address;
    this._email = email;
    this._drName = drName;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get fax(): string {
    return this._fax;
  }

  set fax(value: string) {
    this._fax = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get drName(): string {
    return this._drName;
  }

  set drName(value: string) {
    this._drName = value;
  }
}
