import { create } from 'zustand';
import { Address, addressStoreInterface } from "@/stores/addresses/interfaces";

const useAddressesStore = create((set) => ({
  addressesList: [],
  setAddressesData: (list: [Address]) => set((state: addressStoreInterface) => ({ ...state, addressesList: list })),
}));

export default useAddressesStore;
