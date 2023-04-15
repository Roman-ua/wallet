import { USER_INFO } from '../constants/path';
import $API from '@/http';
import useAuthStore from "@/stores/auth/authStore";

const UseUserInfo = () => {
  const { setUserData } = useAuthStore((state: any) => state);

  const getUserInfo = async () => {
    try {
      const response: any = await $API.get(USER_INFO);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getUserInfo };
};

export default UseUserInfo;
