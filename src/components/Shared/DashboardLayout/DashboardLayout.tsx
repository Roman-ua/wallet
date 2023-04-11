import DASHBOARD_WRAPPER from './styles';
import LogOutButton from '@/components/Shared/LogOutButton/LogOutButton';
import useCurrency from "@/hooks/useCurrency";
import {useEffect} from "react";

interface Props {
  children: JSX.Element;
}

const DashboardLayout = ({ children }: Props) => {
  const { getAllCurrencyWithPrices } = useCurrency();

  useEffect(() => {
    getAllCurrencyWithPrices()
  }, []);

  return (
    <div className={DASHBOARD_WRAPPER.MODE}>
      <div className={DASHBOARD_WRAPPER.WRAPPER_SETTINGS}>
        {children}
        <LogOutButton />
      </div>
    </div>
  );
};

export default DashboardLayout;
