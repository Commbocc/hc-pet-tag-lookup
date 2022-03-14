import { IOwner, ILicense, IVaccine } from "../types";

export default class Animal {
  name: string;
  type: string;
  color: string;
  breed: string;
  owner: IOwner;
  microchip?: string;
  license: ILicense;
  vaccine: IVaccine;

  constructor(x: any) {
    this.name = x.PetName;
    this.type = x.PetType;
    this.color = x.Color;
    this.breed = x.Breed;

    this.owner = {
      name: x.OwnerName,
      phone: this.formatPhone(x.Phone),
    };

    this.microchip = x.tattoo;

    this.license = {
      number: x.TagNumber,
      status: x.TagStatus,
      expiration: new Date(x.TagExpDate),
    };

    this.vaccine = {
      expiration: new Date(x.VacExpDate),
    };
  }

  formatPhone(phone: string): number {
    return parseInt(phone.replace(/\D+/g, ""));
  }
}
