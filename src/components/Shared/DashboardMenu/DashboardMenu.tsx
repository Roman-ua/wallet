import DASHBOARD_MENU from '@/components/Shared/DashboardMenu/styles';
import DASHBOARD_MENU_ITEMS from '@/constants/elements';
import DashboardMenuItem from '@/components/Shared/DashboardMenu/DashboardMenuItem';

const DashboardMenu = () => {
  return (
    <div className={DASHBOARD_MENU.WRAPPER}>
      {DASHBOARD_MENU_ITEMS.map((item, index) => {
        return (
          <DashboardMenuItem
            key={[item.title, index].join('_')}
            path={item.path}
            title={item.title}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default DashboardMenu;
