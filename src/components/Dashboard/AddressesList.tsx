import {DASHBOARD} from "@/styles/dashboard";

const AddressesList = () => {
  return (
    <div className={DASHBOARD.ADDRESSES_LIST_WRAPPER}>
      <div className={DASHBOARD.ADDRESSES_INFO_LABEL}>Your addresses:</div>
      <div className={DASHBOARD.ADD_ADDRESS_WRAPPER}>
        <div className={DASHBOARD.ADD_ADDRESS_ICON}>+</div>
      </div>
    </div>
  )
}

export default AddressesList
