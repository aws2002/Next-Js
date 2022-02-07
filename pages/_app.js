import Layout from '../components/Layouts/Layout '
import '../styles/main.scss'
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}