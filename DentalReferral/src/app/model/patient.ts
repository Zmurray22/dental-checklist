import {Address} from "./address";

export class Patient {

  private _firstName: string;
  private _lastName: string;
  private _birthday: string;
  private _phoneNumber: string;
  private _email: string;
  private _address: Address;
  private _guardian: string;

  constructor(firstName: string, lastName: string, birthday: string, phoneNumber: string, email: string, address: Address, guardian: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthday = birthday;
    this._phoneNumber = phoneNumber;
    this._email = email;
    this._address = address;
    this._guardian = guardian;
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

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
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
