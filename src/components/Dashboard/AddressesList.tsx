import {DASHBOARD} from "@/styles/dashboard";
import useAddressesStore from "@/stores/addresses/addressesStore";
import {Address} from "@/stores/addresses/interfaces";

const AddressesList = ({modalHandler}: any) => {
  const { addressesList } = useAddressesStore((state: any) => state);

  return (
    <div className={DASHBOARD.ADDRESSES_LIST_WRAPPER}>
      <div className={DASHBOARD.ADDRESSES_INFO_LABEL}>Your addresses:</div>
      <div className={DASHBOARD.ADDRESSES_SCROLL_LIST_WRAPPER}>
        {addressesList?.map((item: Address) => {
            return (
              <div key={item.currency} className={DASHBOARD.ADDRESS_WRAPPER}>
                <div className={DASHBOARD.ADDRESS_TITLE}>{item.currency}</div>
                <div className={DASHBOARD.ADDRESS_DESCRIPTION}>{item.address}</div>
              </div>
            )
        })}
        <div className={DASHBOARD.ADD_ADDRESS_WRAPPER} onClick={modalHandler}>
          <div className={DASHBOARD.ADD_ADDRESS_ICON}>+</div>
        </div>
      </div>
    </div>
  )
}

export default AddressesList
