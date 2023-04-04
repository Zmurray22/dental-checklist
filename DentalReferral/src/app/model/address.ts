export class Address {

  private _street: string;
  private _street2: string;
  private _city: string;
  private _state: string;
  private _zipCode: string;
  private _fullAddress: string;


  constructor(street: string, street2: string, city: string, state: string, zipCode: string, fullAddress: string) {
    this._street = street;
    this._street2 = street2;
    this._city = city;
    this._state = state;
    this._zipCode = zipCode;
    this._fullAddress = fullAddress;
  }

  get fullAddress(): string {
    return this._fullAddress;
  }

  set fullAddress(value: string) {
    this._fullAddress = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get street2(): string {
    return this._street2;
  }

  set street2(value: string) {
    this._street2 = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }

  public toString(): string {
    let completeAddress: string = this.street + "\n";
    completeAddress += this.street2.length >1 ? this.street2 + "\n" : "";
    completeAddress += this.city + ", " + this.state + "\n" + this.zipCode;

    return completeAddress;
  }
}
