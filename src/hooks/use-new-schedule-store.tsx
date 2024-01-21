import { create } from 'zustand'

interface useNewScheduleModalStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    session: SignIn | null
    setSession: (session: SignIn) => void
    step: number
    setStep: (step: number) => void
}

export const useNewScheduleModal = create<useNewScheduleModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    session: null,
    setSession: (session) => set({ session }),
    step: 0,
    setStep: (step) => set({ step })
}))

export interface SignIn {
    data: Data
}

export interface Data {
    token: string
    pomelo: Pomelo
}

export interface Pomelo {
    fullName: string
    terms: Term[]
}

export interface Term {
    id: string
    name: string
    startDate: Date
    endDate: Date
}
