import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
    <Nav/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
