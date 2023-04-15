import DASHBOARD_WRAPPER from './styles';
import LogOutButton from '@/components/Shared/LogOutButton/LogOutButton';
import useCurrency from "@/hooks/useCurrency";
import {useEffect} from "react";
import UseUserInfo from "@/hooks/useUserInfo";

interface Props {
  children: JSX.Element[];
}

const DashboardLayout = ({ children }: Props) => {
  const { getAllCurrencyWithPrices } = useCurrency();
  const { getUserInfo } = UseUserInfo();

  useEffect(() => {
    getAllCurrencyWithPrices();
    getUserInfo();
  }, []);

  return (
    <div className={DASHBOARD_WRAPPER.MODE}>
      <div className={DASHBOARD_WRAPPER.WRAPPER_SETTINGS}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
