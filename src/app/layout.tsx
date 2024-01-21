import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { auth } from '@/auth'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Scheduler',
    description:
        'An application that will allow you to share your schedule with friends and create conflicts matrixes.'
}

export default async function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <Providers session={session}>
                        <div className="bg-background h-full">{children}</div>
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    )
}
