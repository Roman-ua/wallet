import {DASHBOARD} from "@/styles/dashboard";
import useCurrenciesStore from "@/stores/currencies/currenciesStore";
import {Currency} from "@/stores/currencies/interfaces";
import useAddresses from "@/hooks/useAddresses";

const AddAddressModal = ({ modalHandler }:any) => {
  const { currenciesList } = useCurrenciesStore((state: any) => state);
  const { createNewAddress, getAllAddresses } = useAddresses();

  const addAddressHandler = async (value: string) => {
    await createNewAddress(value);
    await getAllAddresses();
    modalHandler();
  };

  return(
    <div className={DASHBOARD.MODAL_WRAPPER}>
      <div className={DASHBOARD.MODAL_CONTENT_WRAPPER}>
        <div className={DASHBOARD.CURRENCIES_INFO_LABEL}>Allowed currencies:</div>
        <div className={DASHBOARD.MODAL_CLOSE_BTN} onClick={modalHandler}>+</div>
        {
          currenciesList?.map((item: Currency) => (
            <div key={item.name} className={DASHBOARD.CURRENCY_ITEM_MODAL}>
              <div className={DASHBOARD.CURRENCY_ITEM_TITLE_MODAL}>{item.name}</div>
              <div className={DASHBOARD.CURRENCY_ITEM_VALUE_MODAL_WRAPPER}>
                <div className={DASHBOARD.CURRENCY_ITEM_VALUE_MODAL}>{item.priceUsd}</div>
                <div
                  className={DASHBOARD.ADD_ADDRESS_BTN}
                  onClick={() => addAddressHandler(item.name)}
                >
                  Add address
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AddAddressModal
