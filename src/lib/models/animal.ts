export default class Animal {
  name: string;
  type: string;
  color: string;
  breed: string;
  owner: __hc.PetTagLookup.Animal.IOwner;
  microchip?: string;
  license?: __hc.PetTagLookup.Animal.ILicense;
  vaccine: __hc.PetTagLookup.Animal.IVaccine;

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
