import $API from '@/http';
import { Auth, Registry } from '@/interfaces/authInterface';
import { LOGIN_PATH, MAIN_DASHBOARD_PATH, REGISTRATION_PATH } from '@/constants/path';
import { useRouter } from 'next/router';
import { clearStorage, setToLocalStorage } from '@/utils/localStorage';
import useAuthStore from '@/stores/auth/authStore';
import { authStoreInterface } from '@/stores/auth/interfaces';
import { AUTH } from '@/constants/routes';

const UseAuth = () => {
  const router = useRouter();
  const { setUserData, setAuthError } = useAuthStore((state: any) => state);

  const loginHandler = async (userData: Auth) => {
    try {
      const response: any = await $API.post(LOGIN_PATH, userData);

      if (response.status === 200) {
        setToLocalStorage('token', response.data.token);
        setUserData(response.data.user);
        await router.push(MAIN_DASHBOARD_PATH);
      }
    } catch (e: any) {
      setAuthError(e.response.data.message);
      console.log(e.response.data.message);
    }
  };

  const registrationHandler = async (userData: Registry) => {
    try {
      const response = await $API.post(REGISTRATION_PATH, userData);
      console.log(response, 'registrationHandler');
    } catch (e) {
      console.log(e);
    }
  };

  const logoutHandler = async () => {
    clearStorage();
    await router.replace(AUTH);
  };

  return { loginHandler, registrationHandler, logoutHandler };
};

export default UseAuth;
