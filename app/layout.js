import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './components/AuthProvider'
import { cn } from '@/lib/utils'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <AuthProvider>
        <body className={cn
          ("relative h-full font-sans antialiased",
           inter.className
          )}>
            <main className="relative flex flex-col min-h-screen">
              <div className="flex-grow flex-1">{children}</div>
            </main> 
        </body>
      </AuthProvider>  
    </html>
  )
}
