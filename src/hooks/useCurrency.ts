import $API from '@/http';
import { CURRENCIES_PATH } from '@/constants/path';

const useCurrency = () => {
  const getAllCurrencyWithPrices = async () => {
    try {
      const response = await $API.get(CURRENCIES_PATH);
      console.log(response, 'getAllCurrencyWithPrices');
    } catch (e) {
      console.log(e);
    }
  };

  return { getAllCurrencyWithPrices };
};

export default useCurrency;
