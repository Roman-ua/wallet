import { AUTH_LAYOUT_STYLES } from '@/components/Shared/AuthLayout/styles';

interface Props {
  children: JSX.Element;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className={AUTH_LAYOUT_STYLES.MODE}>
      <div className={AUTH_LAYOUT_STYLES.WRAPPER_SETTINGS}>{children}</div>
    </div>
  );
};

export default AuthLayout;
