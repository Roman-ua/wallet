import DASHBOARD_MENU from '@/components/Shared/DashboardMenu/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface DashboardMenuItem {
  path: string;
  icon: string;
  title: string;
}

const DashboardMenuItem = ({ path, icon, title }: DashboardMenuItem) => {
  const { pathname } = useRouter();

  return (
    <div className={`${DASHBOARD_MENU.ITEM} ${path === pathname && DASHBOARD_MENU.ITEM_ACTIVE}`}>
      <Image src={icon} alt="icon" />
      <div>{title}</div>
    </div>
  );
};

export default DashboardMenuItem;
