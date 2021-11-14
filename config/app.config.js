import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const appConfig = {
  appTitle: 'Dashboard',
  appSubTitle: 'Simplifying your data needs',
  navigation: [
    {
      id: 1,
      title: 'Dashboard',
      icon: <DashboardIcon/>,
      accessType: 'admin',
    },
    {
      id: 2,
      title: 'Clients',
      icon: <AccountCircleIcon/>,
      accessType: 'admin'
    },
    {
      id: 3,
      title: 'Staff',
      icon: <PeopleAltIcon/>,
      accessType: 'admin'
    },
    {
      id: 4,
      title: 'Financial',
      icon: <LocalAtmIcon/>,
      accessType: 'admin'
    },
    {
      id: 5,
      title: 'Settings',
      icon: <SettingsIcon/>,
      accessType: 'admin'
    },
    {
      id: 6,
      title: 'Logout',
      icon: <LogoutIcon/>,
      accessType: 'admin'
    }
  ]
}
