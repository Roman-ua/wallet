import { USER_INFO } from '../constants/path';
import $API from '@/http';

const useUserInfo = () => {
  const getUserInfo = async () => {
    try {
      const response: any = await $API.get(USER_INFO);
      console.log(response, 'response');
    } catch (error) {
      console.log(error);
    }
  };

  return { getUserInfo };
};

export default useUserInfo;
