import { Lexend_Deca } from 'next/font/google'
import './globals.css'

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: '3 Column Card',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon-32x32.png" />
      </head>
      <body className={lexendDeca.className}>{children}</body>
    </html>
  )
}
