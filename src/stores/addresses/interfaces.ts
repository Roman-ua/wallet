export interface Address {
  address: string,
  currency: string
}

export interface addressStoreInterface {
  addressesList: [];
  setAddressesData: () => never;
}
