import { create } from 'zustand';
import {Currency, currencyStoreInterface} from "@/stores/currencies/interfaces";

const useCurrenciesStore = create((set) => ({
  currenciesList: [],
  setCurrenciesData: (list: [Currency]) => set((state: currencyStoreInterface) => ({ ...state, currenciesList: list })),
}));

export default useCurrenciesStore;
