import '@/styles/globals.css'
import Layout from '@/components/layout'
import 'atropos/css'

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App