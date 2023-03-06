import DASHBOARD_WRAPPER from './styles';
import DashboardMenu from '@/components/Shared/DashboardMenu/DashboardMenu';
import LogOutButton from '@/components/Shared/LogOutButton/LogOutButton';

interface Props {
  children: JSX.Element;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className={DASHBOARD_WRAPPER.MODE}>
      <div className={DASHBOARD_WRAPPER.WRAPPER_SETTINGS}>
        <DashboardMenu />
        {children}
        <LogOutButton />
      </div>
    </div>
  );
};

export default DashboardLayout;
