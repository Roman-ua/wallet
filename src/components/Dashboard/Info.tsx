import LogOutButton from "@/components/Shared/LogOutButton/LogOutButton";
import {DASHBOARD} from "@/styles/dashboard";

const Info = () => {
  return (
    <div  className={DASHBOARD.INFO_FOOTER_WRAPPER}>
      <div className={DASHBOARD.INFO_LABEL}>Info:</div>
      <LogOutButton />
    </div>
  )
}

export default Info
