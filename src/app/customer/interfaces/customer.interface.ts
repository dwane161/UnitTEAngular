export interface ApiCustomersResponse {
  data: Customer[],
  status: string;
}

export interface ApiAddCustomerResponse {
  data: Customer,
  status: string;
}

export interface Customer {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  genre: string,
  email: string,
  contactNumbers: string
}

export enum ApiResponseStatus {
  SUCCESS = 'Success',
  FAILURE = 'Failure'
}
