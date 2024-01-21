'use client'

import { Modal } from '@/components/ui/modal'

import { useNewScheduleModal } from '@/hooks/use-new-schedule-store'
import LoginForm from './components/LoginForm'
import SchedulesForm from './components/SchedulesForm'

const textsByStep = {
    0: {
        title: 'Import New Schedule from Uninorte',
        description:
            'Please enter your Uninorte user credentials. These will only be used to fetch your schedule and will not be saved.'
    },
    1: {
        title: 'Choose Schedules',
        description: 'Choose the schedules you want to import.'
    }
}

export const NewScheduleModal = () => {
    const storeModal = useNewScheduleModal()

    return (
        <Modal
            title={
                textsByStep[storeModal.step as keyof typeof textsByStep].title
            }
            description={
                textsByStep[storeModal.step as keyof typeof textsByStep]
                    .description
            }
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <div className="space-y-2">
                        {storeModal.step === 0 && <LoginForm />}
                        {storeModal.step === 1 && <SchedulesForm />}
                    </div>
                </div>
            </div>
        </Modal>
    )
}
