import React from 'react';
import ProtectLayout from '@/components/Shared/ProtectLayout/ProtectLayout';
import DashboardLayout from '@/components/Shared/DashboardLayout/DashboardLayout';
import useAuthStore from '@/stores/auth/authStore';
import { DASHBOARD } from '@/styles/dashboard';

const Dashboard = () => {
  const { userData } = useAuthStore((state: any) => state);

  return (
    <DashboardLayout>
      {Object.keys(userData).length > 0 ? (
        <div className={DASHBOARD.USER_INFO_WRAPPER}>
          First Name: {userData.firstname} Last Name: {userData.lastname}
        </div>
      ) : (
        <div></div>
      )}
    </DashboardLayout>
  );
};

export default ProtectLayout(Dashboard);
