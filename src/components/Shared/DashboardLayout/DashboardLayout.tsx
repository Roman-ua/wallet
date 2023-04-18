import DASHBOARD_WRAPPER from './styles';
import useCurrency from "@/hooks/useCurrency";
import {useEffect} from "react";
import UseUserInfo from "@/hooks/useUserInfo";
import useAddresses from "@/hooks/useAddresses";

interface Props {
  children: JSX.Element[];
}

const DashboardLayout = ({ children }: Props) => {
  const { getAllCurrencyWithPrices } = useCurrency();
  const { getUserInfo } = UseUserInfo();
  const { getAllAddresses } = useAddresses();

  const fetchDataHandler = async () => {
    await getAllAddresses();
    await getAllCurrencyWithPrices();
    await getUserInfo();
  }

  useEffect(() => {
    fetchDataHandler().then();
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
