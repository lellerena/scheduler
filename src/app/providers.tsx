'use client'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth/types'

import { ThemeProvider } from '@/providers/theme-provider'
import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'

interface ProvidersProps {
    children: React.ReactNode
    session: Session | null
}

export function Providers({ children, session }: ProvidersProps) {
    return (
        <SessionProvider session={session}>
            {children}
            <ToastProvider />
            <ModalProvider />
        </SessionProvider>
    )
}
