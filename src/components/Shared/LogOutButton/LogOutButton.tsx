import LOG_OUT_BTN from '@/components/Shared/LogOutButton/styles';
import useAuth from '@/hooks/useAuth';

const LogOutButton = () => {
  const { logoutHandler } = useAuth();

  return (
    <div onClick={logoutHandler} className={LOG_OUT_BTN.BTN}>
      Log-out
    </div>
  );
};

export default LogOutButton;
