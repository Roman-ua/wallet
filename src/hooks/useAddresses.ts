import $API from '@/http';
import { ADDRESSES_PATH } from '@/constants/path';

const useAddresses = () => {
  const createNewAddress = async (uid: string, currency: string) => {
    try {
      const response = await $API.post(ADDRESSES_PATH, { userId: uid, currency });
      console.log(response, 'createNewAddress');
    } catch (e) {
      console.log(e);
    }
  };

  const getAllAddresses = async (uid: string) => {
    try {
      const response = await $API.get(`${ADDRESSES_PATH}/${uid}`);
      console.log(response, 'getAllAddresses');
    } catch (e) {
      console.log(e);
    }
  };
  return { createNewAddress, getAllAddresses };
};

export default useAddresses;
