import React, {useEffect} from 'react';
import ProtectLayout from '@/components/Shared/ProtectLayout/ProtectLayout';
import DashboardLayout from '@/components/Shared/DashboardLayout/DashboardLayout';
import UserCard from "@/components/Dashboard/UserCard";
import CurrenciesList from "@/components/Dashboard/CurrenciesList";
import Transactions from "@/components/Dashboard/Transactions";
import AddressesList from "@/components/Dashboard/AddressesList";
import {DASHBOARD} from "@/styles/dashboard";
import Info from "@/components/Dashboard/Info";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className={DASHBOARD.INFO_WRAPPER}>
        <UserCard />
        <CurrenciesList />
        <Transactions />
      </div>
      <AddressesList />
      <Info />
    </DashboardLayout>
  );
};

export default ProtectLayout(Dashboard);
