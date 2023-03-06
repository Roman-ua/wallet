import { AUTH_LAYOUT_STYLES } from '@/components/Shared/AuthLayout/styles';
import useAuthStore from '@/stores/auth/authStore';

interface Props {
  children: JSX.Element;
}

const AuthLayout = ({ children }: Props) => {
  const { authError } = useAuthStore((state: any) => state);

  return (
    <div className={AUTH_LAYOUT_STYLES.MODE}>
      {authError && <div className={AUTH_LAYOUT_STYLES.NOTION_POP_UP}>{authError}</div>}
      <div className={AUTH_LAYOUT_STYLES.WRAPPER_SETTINGS}>{children}</div>
    </div>
  );
};

export default AuthLayout;
