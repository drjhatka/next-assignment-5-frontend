
import type { Metadata } from 'next'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material'
import theme from '../material-ui/theme'
import { ReactNode } from "react";
import ReduxProvider from "@/app/StoreProvider";
import Footer from '@/components/home/Footer'
import NavbarUI from '@/components/shared/NavbarUI'

export const metadata: Metadata = {
  title: 'Bishawjit Dey',
  description: 'Next Level Web Developer'
}

export default async function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' data-theme='light'>
      <body>
        <div className={'min-h-screen w-[100%] mx-auto ' + 'roboto.variable'}>
          <ReduxProvider >
            <AppRouterCacheProvider >
              <ThemeProvider theme={theme}>
                <NavbarUI></NavbarUI>
                {children}
                <Footer></Footer>

              </ThemeProvider>
            </AppRouterCacheProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  )
}
