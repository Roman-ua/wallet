import React, { useState } from 'react';
import ProtectLayout from '@/components/Shared/ProtectLayout/ProtectLayout';
import DashboardLayout from '@/components/Shared/DashboardLayout/DashboardLayout';
import UserCard from "@/components/Dashboard/UserCard";
import CurrenciesList from "@/components/Dashboard/CurrenciesList";
import Transactions from "@/components/Dashboard/Transactions";
import AddressesList from "@/components/Dashboard/AddressesList";
import {DASHBOARD} from "@/styles/dashboard";
import Info from "@/components/Dashboard/Info";
import AddAddressModal from "@/components/Shared/Modals/AddAddressModal";

const Dashboard = () => {
  const [openAddAddressModal, setOpenAddressModal] = useState(false);
  const modalHandler = () => {
    setOpenAddressModal(!openAddAddressModal);
  };

  return (
    <DashboardLayout>
      <div className={DASHBOARD.INFO_WRAPPER}>
        <UserCard />
        <CurrenciesList />
        <Transactions />
      </div>
      <AddressesList modalHandler={modalHandler} />
      <Info />
      {openAddAddressModal ? <AddAddressModal modalHandler={modalHandler} /> : <></>}
    </DashboardLayout>
  );
};

export default ProtectLayout(Dashboard);
