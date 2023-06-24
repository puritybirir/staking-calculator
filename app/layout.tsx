import './globals.css'
import { montserrat } from '@/fonts/fonts'

export const metadata = {
  title: 'Staking Calculator',
  description: 'A simple spreadsheet application. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-Montserrat`}>{children}</body>
    </html>
  )
}
