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

import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export const appConfig = {
  appTitle: 'Argon',
  appSubTitle: 'Simplifying your data needs',
  accessType: 'admin',
  isLayoutCompact: false,
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
      title: 'Members',
      href: '/members',
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
  ],
  dashboardConfig:{
    activeMembers: {
      id: 1,
      title: 'Active Members',
      permissions: ['admin', 'l1'],
      icon: <PaymentsIcon fontSize="large" style={{fill: '#5E72E4'}} />,
      canRefresh: true,
      attrValue: '320',
      subText: '3.43% in Last Week',
      lastRefreshedAt: 'yesterday',
      filters: []
    },
    weeklyCollection: {
      id: 2,
      title: 'Weekly Collection',
      permissions: ['admin'],
      icon: <AccountBalanceWalletIcon fontSize="large" style={{fill: '#2DCE89'}}/>,
      canRefresh: true,
      attrValue: '3,20,000',
      filters: []
    },
    upComingRenewals: {
      id: 3,
      title: 'Upcoming Renewals',
      permissions: ['admin', 'l1'],
      icon: <PendingActionsIcon fontSize="large" style={{fill: '#FB6440'}}/>,
      canRefresh: true,
      attrValue: '3,20,000',
      filters: []
    },
    totalVisits: {
      id: 4,
      title: 'Total Visits',
      permission: ['admin', 'l1'],
      icon: <EmojiPeopleIcon fontSize="large" style={{fill: '#0ECDEF'}} />,
      canRefresh: true,
      attrValue: '43',
      filters: []
    }
  }
}
