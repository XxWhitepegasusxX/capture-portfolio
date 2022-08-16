import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import Nav from '../components/Nav'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <GlobalStyle/>
      <Nav/>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
