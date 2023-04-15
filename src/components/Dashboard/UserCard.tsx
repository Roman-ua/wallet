import {DASHBOARD} from "@/styles/dashboard";
import React from "react";
import useAuthStore from "@/stores/auth/authStore";

const UserCard = () => {
  const { userData } = useAuthStore((state: any) => state);

  return (
    <div className={DASHBOARD.USER_INFO_WRAPPER}>
      <div className={DASHBOARD.USER_INFO_LABEL}>User info:</div>
      <div className={DASHBOARD.USER_INFO_AVATAR}>
        {`${userData.firstname?.charAt(0)}${userData.lastname?.charAt(0)}`}
      </div>
      <div className={DASHBOARD.USER_INFO_LABEL}>First Name:</div>
      <div className={DASHBOARD.USER_INFO_VALUE}>{userData.firstname}</div>
      <div className={DASHBOARD.USER_INFO_LABEL}>Last Name:</div>
      <div className={DASHBOARD.USER_INFO_VALUE}>{userData.lastname}</div>
      <div className={DASHBOARD.USER_INFO_LABEL}>Email:</div>
      <div className={DASHBOARD.USER_INFO_VALUE}>{userData.email}</div>
      <div className={DASHBOARD.SUBSCRIPTION_TYPE_WRAPPER}>
        <div className={DASHBOARD.USER_INFO_LABEL}>Subscription type:</div>
        <div className={DASHBOARD.SUBSCRIPTION_TYPE}>FREE</div>
      </div>
    </div>
  )
}

export default UserCard;
