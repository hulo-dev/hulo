'use client'
import './global.scss'
import { useState } from 'react';
import { Providers } from './providers';
import ChangeFooter from './(components)/ChangeFooter';
import Header from './(components)/Header/Header'

// export const metadata = {
//   title: 'Hulo Dev Next js',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const [isLock, setIsLock] = useState(false);

  const lockHandler = (lock) => {
      setIsLock(lock);
  }

  return (
    <html suppressHydrationWarning lang="en" className='scroll-smooth'>
      <body className={isLock ? 'lock' : ''}>
        <div className='overlay'/>
        <Providers>
          <Header lock={lockHandler} setIsLock={setIsLock}/>
            {children}
          <ChangeFooter />
        </Providers>
      </body>
    </html>
  )
}
