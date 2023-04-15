import $API from '@/http';
import { CURRENCIES_PATH } from '@/constants/path';
import useCurrenciesStore from "@/stores/currencies/currenciesStore";

const useCurrency = () => {
  const { setCurrenciesData } = useCurrenciesStore((state: any) => state);
  const getAllCurrencyWithPrices = async () => {
    try {
      const response = await $API.get(CURRENCIES_PATH);
      setCurrenciesData(response.data.currenciesList);
    } catch (e) {
      console.log(e);
    }
  };

  return { getAllCurrencyWithPrices };
};

export default useCurrency;
