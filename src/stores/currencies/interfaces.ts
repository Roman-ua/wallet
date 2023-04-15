export interface Currency {
  name: string,
  priceUsd: number,
}

export interface currencyStoreInterface {
  currenciesList: [];
  setCurrenciesData: () => never;
}
