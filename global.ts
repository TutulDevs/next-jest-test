export {};

export interface Console {
  log: string;
  alert: Function;
}

declare global {
  type test2 = Function;
  interface Geo {
    lat: string;
    lng: string;
  }

  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }

  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  interface HomeData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
}
