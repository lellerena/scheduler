'use client'

import { useState } from 'react'
import { Copy, Edit, MoreHorizontal, Trash, View } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { AlertModal } from '@/components/modals/alert-modal'

import { ScheduleColumn } from './columns'
import Link from 'next/link'
import {
    deleteSchedule,
    makeScheduleCurrent
} from '@/actions/uninorte/schedule'

interface CellActionProps {
    data: ScheduleColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const onConfirm = async () => {
        try {
            setLoading(true)
            await deleteSchedule(data.id)
            toast.success('Schedule deleted.')
            router.refresh()
        } catch (error) {
            toast.error(
                'An error occurred while deleting the schedule. Please try again.'
            )
        } finally {
            setOpen(false)
            setLoading(false)
        }
    }

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id)
        toast.success('Schedule ID copied to clipboard.')
    }

    const onMakeCurrent = async (id: string) => {
        try {
            setLoading(true)
            await makeScheduleCurrent(id)
            toast.success('Schedule set as current.')
            router.refresh()
        } catch (error) {
            toast.error(
                'An error occurred while setting the schedule as current. Please try again.'
            )
        } finally {
            setOpen(false)
            setLoading(false)
        }
    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() =>
                            router.push(`/home/schedules/${data.id}`)
                        }
                    >
                        <View className="mr-2 h-4 w-4" /> Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onCopy(data.id)}>
                        <Copy className="mr-2 h-4 w-4" /> Copy Id
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => onMakeCurrent(data.id)}>
                        <Edit className="mr-2 h-4 w-4" /> Make Current
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
