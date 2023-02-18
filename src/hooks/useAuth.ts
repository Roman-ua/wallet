import $API from '@/http';
import { Auth, Registry } from '@/interfaces/authInterface';
import { LOGIN_PATH, REGISTRATION_PATH } from '@/constants/path';

const UseAuth = () => {
  const loginHandler = async (userData: Auth) => {
    try {
      const response = await $API.post(LOGIN_PATH, userData);
      console.log(response, 'loginHandler');
    } catch (e) {
      console.log(e);
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

  return { loginHandler, registrationHandler };
};

export default UseAuth;
