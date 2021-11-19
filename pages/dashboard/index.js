import styles from './dashboard.module.scss';
import Container from 'react-bootstrap/Container';
import DashboardHeader from './dashboardHeader';

import {appConfig} from '../../config/app.config';
import InformationCard from '../../molecules/InformationCard';


import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


export default function Dashboard(){
  return <main className={styles.container}>
    <DashboardHeader/>
    <section className={styles.grid}>

      {/* {appConfig.dashboardConfig
      .filter((elm) => elm.permissions.indexOf(appConfig.accessType) !== -1)
      .map((res) => {
        <article>
          <InformationCard title={res.title} subTitle={res.attrValue} info={res.subText || ''} icon= />
        </article>
      })} */}
      
      <article>
        <InformationCard title="Weekly Collection" subTitle="53,000" icon={<PaymentsIcon fontSize="large" style={{fill: '#5E72E4'}}/>} info="13.45% in Last Week" />
      </article>
      <article>
        <InformationCard title="Upcoming Renewals" subTitle="7" icon={<AccountBalanceWalletIcon fontSize="large" style={{fill: '#2DCE89'}}/>} info="In this week" />
      </article>
      <article>
        <InformationCard title="Pending Collection" subTitle="12,000"  icon={<PendingActionsIcon fontSize="large" style={{fill: '#FB6440'}}/>} info="Last Month"/>
      </article>
      <article>
        <InformationCard title="Total Visits" subTitle="12" icon={<EmojiPeopleIcon fontSize="large" style={{fill: '#0ECDEF'}} />} info="25% in last week"  />
      </article>
       <article>
        <InformationCard title="Total Revenue" subTitle="12" icon={<EmojiPeopleIcon fontSize="large" style={{fill: '#0ECDEF'}} />} info="25% in last week"  />
      </article>
     </section>
    </main>
}