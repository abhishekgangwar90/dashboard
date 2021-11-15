import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

import Notifications from './../atoms/Notifications';
import Profile from './../atoms/Profile';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const appConfig = {
  appTitle: 'Argon',
  appSubTitle: 'Simplifying your data needs',
  accessType: 'admin',
  navigation: [
    {
      id: 1,
      content: <Notifications />,
      accessType: 'admin',
    },
    {
      id: 2,
      content: <AccountCircleOutlinedIcon/>,
      accessType: 'admin',
    },
    {
      id: 3,
      content: <MoreVertIcon/>,
      accessType: 'admin',
    },
  ],
  sideNavigation: [
    {
      id: 1,
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon style={{fill: '#5E72E4'}}/>,
      accessType: 'admin',
    },
    {
      id: 2,
      title: 'Clients',
      href: '/clients',
      icon: <AccountCircleIcon style={{fill: '#FB6440' }}/>,
      accessType: 'admin'
    },
    {
      id: 3,
      title: 'Staff',
      href: 'dashboard',
      href: '/staff',
      icon: <PeopleAltIcon style={{fill: '#0ECDEF' }}/>,
      accessType: 'admin'
    },
    {
      id: 4,
      title: 'Financial',
      href: '/financials',
      icon: <LocalAtmIcon style={{fill: '#2DCE89' }}/>,
      accessType: 'admin'
    },
    {
      id: 5,
      title: 'Support',
      href: '/support',
      icon: <HelpIcon style={{fill: '#0ECDEF' }}/>,
      accessType: 'admin'
    },
    {
      id: 6,
      title: 'Settings',
      href: '/settings',
      icon: <SettingsIcon style={{fill: '#666666' }}/>,
      accessType: 'admin'
    },
    {
      id: 7,
      title: 'Logout',
      href:'',
      icon: <LogoutIcon style={{fill: '#FB6440' }}/>,
      accessType: 'admin'
    }
  ]
}
