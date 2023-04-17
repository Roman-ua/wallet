import {DASHBOARD} from "@/styles/dashboard";
import useCurrenciesStore from "@/stores/currencies/currenciesStore";
import {Currency} from "@/stores/currencies/interfaces";

const CurrenciesList = () => {
  const { currenciesList } = useCurrenciesStore((state: any) => state);

  return <div className={DASHBOARD.CURRENCIES_LIST_WRAPPER}>
    <div className={DASHBOARD.CURRENCIES_INFO_LABEL}>Allowed currencies and exchange rate:</div>
    <div className={DASHBOARD.CURRENCIES_SCROLL_WRAPPER}>
      {
        currenciesList?.map((item: Currency) => (
          <div key={item.name} className={DASHBOARD.CURRENCY_ITEM}>
            <div className={DASHBOARD.CURRENCY_ITEM_TITLE}>{item.name}</div>
            <div className={DASHBOARD.CURRENCY_ITEM_VALUE}>{item.priceUsd}</div>
          </div>
        ))
      }
    </div>
  </div>
}

export default CurrenciesList;
