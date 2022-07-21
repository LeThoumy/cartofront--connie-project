import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { blueTheme } from '../stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="blue"
      value={{
        light: "light",
        blue: blueTheme.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>);
}

export default MyApp
