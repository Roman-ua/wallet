import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { getFromLocalStorage } from '@/utils/localStorage';
import { AUTH } from '@/constants/routes';
import useUserInfo from '@/hooks/useUserInfo';

const ProtectLayout = (Component: FunctionComponent) => {
  const { getUserInfo } = useUserInfo();

  return (props: any) => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const checkToken = async () => {
        const token = getFromLocalStorage('token');

        if (!token) {
          await router.replace(AUTH);
        } else {
          setAuthenticated(true);
          getUserInfo();
        }
      };

      checkToken().then();
    }, []);

    if (authenticated) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
};

export default ProtectLayout;
