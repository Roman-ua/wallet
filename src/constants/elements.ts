import dashboard from '../../public/dashboardMenuIcons/Work.svg';
import team from '../../public/dashboardMenuIcons/3User.svg';
import instruction from '../../public/dashboardMenuIcons/Paper.svg';
import help from '../../public/dashboardMenuIcons/lifebuoy.svg';

const DASHBOARD_MENU_ITEMS = [
  {
    icon: dashboard,
    title: 'Account',
    path: '/main/dashboard'
  },
  {
    icon: team,
    title: 'Team',
    path: '/main/team'
  },
  {
    icon: instruction,
    title: 'Instruction',
    path: '/main/instruction'
  },
  {
    icon: help,
    title: 'Help',
    path: '/main/help'
  }
];

export default DASHBOARD_MENU_ITEMS;
