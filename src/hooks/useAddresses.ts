import $API from '@/http';
import { ADDRESSES_PATH } from '@/constants/path';
import useAddressesStore from "@/stores/addresses/addressesStore";

const useAddresses = () => {
  const { setAddressesData } = useAddressesStore((state: any) => state);

  const createNewAddress = async (currency: string) => {
    try {
      const response = await $API.post(ADDRESSES_PATH, { currency });
      console.log(response, 'createNewAddress');
    } catch (e) {
      console.log(e);
    }
  };

  const getAllAddresses = async () => {
    try {
      const response = await $API.get(`${ADDRESSES_PATH}`);
      if (response.status === 200) {
        setAddressesData(response.data?.addressesList);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return { createNewAddress, getAllAddresses };
};

export default useAddresses;
