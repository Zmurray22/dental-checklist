export class Address {

  private _street: string;
  private _streetOpt: string;
  private _city: string;
  private _state: string;
  private _zipCode: string;
  private _fullAddress: string;

  constructor(street?: string, streetOpt?: string, city?: string, state?: string, zipCode?: string, fullAddress?: string) {
    this._street = street ? street : "";
    this._streetOpt = streetOpt ? streetOpt : "";
    this._city = city ? city : "";
    this._state = state ? state : "";
    this._zipCode = zipCode ? zipCode : "";
    this._fullAddress = fullAddress ? fullAddress : "";
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

  get streetOpt(): string {
    return this._streetOpt;
  }

  set streetOpt(value: string) {
    this._streetOpt = value;
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
    completeAddress += this.streetOpt.length >1 ? this.streetOpt + "\n" : "";
    completeAddress += this.city + ", " + this.state + "\n" + this.zipCode;

    return completeAddress;
  }
}
