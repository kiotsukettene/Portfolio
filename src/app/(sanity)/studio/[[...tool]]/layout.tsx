import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'Russ Portfolio Studio',
    description: 'Russ Portfolio Studio',
}
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
  )
}

export default Layout