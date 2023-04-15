import LogOutButton from "@/components/Shared/LogOutButton/LogOutButton";
import {DASHBOARD} from "@/styles/dashboard";

const Info = () => {
  return (
    <div  className={DASHBOARD.INFO_FOOTER_WRAPPER}>
      <LogOutButton />
    </div>
  )
}

export default Info
