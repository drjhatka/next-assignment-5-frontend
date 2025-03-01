
import type { Metadata } from 'next'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material'
import theme from '../material-ui/theme'
import {ReactNode} from "react";
import ReduxProvider from "@/app/StoreProvider";

export const metadata: Metadata = {
  title: 'Bishawjit Dey',
  description: 'Next Level Web Developer'
}

export default async function RootLayout ({
  children
}: Readonly<{ children:ReactNode }>) {
  return (
    <html lang='en' data-theme='light'>
      <body>
        <div className={'min-h-screen w-[90%] mx-auto '+'roboto.variable'}>
          <ReduxProvider >
          <AppRouterCacheProvider >
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  )
}
