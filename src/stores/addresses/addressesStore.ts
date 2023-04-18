import { create } from 'zustand';
import { Address, addressStoreInterface, Balance } from '@/stores/addresses/interfaces';

const useAddressesStore = create((set) => ({
  addressesList: [],
  setAddressesData: (list: [Address]) => set((state: addressStoreInterface) => ({ ...state, addressesList: list })),
  setBalance: (listBalances: [Balance]) => set((state: addressStoreInterface) => (
    {
      ...state,
      addressesList: state.addressesList.map((item: Address) => {
        const currentIndex = listBalances.findIndex((balanceItem) => balanceItem.address === item.address);

        if (currentIndex !== -1) {
          return {
            ...item,
            balance: listBalances[currentIndex].balance
          }
        } else {
          return item
        }
      })
    }
  )),
}));

export default useAddressesStore;
