export interface Address {
  address: string,
  currency: string,
  balance: number
}

export interface Balance {
  address: string,
  currency: string,
  balance: number
}

export interface addressStoreInterface {
  addressesList: [];
  setAddressesData: () => never;
}
