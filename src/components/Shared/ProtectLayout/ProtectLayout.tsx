import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { getFromLocalStorage } from '@/utils/localStorage';
import { AUTH } from '@/constants/routes';

const ProtectLayout = (Component: FunctionComponent) => {
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
