import {DASHBOARD} from "@/styles/dashboard";

const Transactions = () => {
  return (
    <div className={DASHBOARD.TRANSACTIONS_WRAPPER}>
      <div className={DASHBOARD.TRANSACTIONS_INFO_LABEL}>Your transactions:</div>
      <div className={DASHBOARD.EMPTY_BLOCK_WRAPPER}>
        <div className={DASHBOARD.EMPTY_BLOCK_LABEL}>Transactions is empty</div>
      </div>
    </div>
  )
}

export default Transactions;
