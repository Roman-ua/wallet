import React from 'react';
import ProtectLayout from '@/components/Shared/ProtectLayout/ProtectLayout';
import DashboardLayout from '@/components/Shared/DashboardLayout/DashboardLayout';
import useAuthStore from '@/stores/auth/authStore';
import { DASHBOARD } from '@/styles/dashboard';

const Dashboard = () => {
  const { userData } = useAuthStore((state: any) => state);

  return (
    <DashboardLayout>
      <div className={DASHBOARD.USER_INFO_WRAPPER}>
        <div className={DASHBOARD.USER_INFO_AVATAR}>GR</div>
        <div className={DASHBOARD.USER_INFO_LABEL}>First Name:</div>
        <div className={DASHBOARD.USER_INFO_VALUE}>Roman</div>
        <div className={DASHBOARD.USER_INFO_LABEL}>Last Name:</div>
        <div className={DASHBOARD.USER_INFO_VALUE}>Havrilchuk</div>
        <div className={DASHBOARD.USER_INFO_LABEL}>Email:</div>
        <div className={DASHBOARD.USER_INFO_VALUE}>gavrilchuk@gmail.com</div>
        <div className={DASHBOARD.SUBSCRIPTION_TYPE_WRAPPER}>
          <div className={DASHBOARD.USER_INFO_LABEL}>Subscription type:</div>
          <div className={DASHBOARD.SUBSCRIPTION_TYPE}>FREE</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProtectLayout(Dashboard);
