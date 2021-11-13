import './../styles/main.scss';
import Layout from '../molecules/layout'

function MyApp({ Component, pageProps }) {
  return <Layout>
  <Component {...pageProps} />
  </Layout>
}

export default MyApp
