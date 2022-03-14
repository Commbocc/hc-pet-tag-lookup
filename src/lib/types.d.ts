import Animal from "./models/animal";

declare namespace __hc.PetTagLookup {
  interface IPetsReactive {
    loading: boolean;
    error: string;
    data: Animal[] | null;
  }
}

//
declare namespace __hc.PetTagLookup.Animal {
  interface IOwner {
    name: string;
    phone: number;
  }

  interface ILicense {
    number: string;
    status: string;
    expiration: Date;
  }

  interface IVaccine {
    expiration: Date;
  }
}
