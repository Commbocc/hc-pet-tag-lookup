import Animal from "./models/animal";

interface IPetsReactive {
  loading: boolean;
  error: string;
  data: Animal[] | null;
}

interface IOwner {
  name: string;
  phone: number | null;
}

interface ILicense {
  number: string;
  status: string;
  expiration: Date;
}

interface IVaccine {
  expiration: Date;
}
