import Animal from "./models/animal";

interface IPetsReactive {
  loading: boolean;
  error: string;
  data: Animal[] | null;
}

interface IOwner {
  name: string;
  phone: string | null;
}

interface ILicense {
  number: string;
  status: string;
  expiration: string | null;
}

interface IVaccine {
  expiration: string | null;
}
