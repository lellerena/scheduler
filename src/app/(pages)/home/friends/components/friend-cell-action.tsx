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
import { UserType } from '@/data/users/users'
import { removeFriend } from '@/actions/uninorte/friends'

interface CellActionProps {
    data: UserType
    userId: string
}

export const FriendCellAction: React.FC<CellActionProps> = ({
    data,
    userId
}) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const onConfirm = async () => {
        try {
            setLoading(true)
            await removeFriend(data.id, userId)
            toast.success('Friend deleted.')
            router.refresh()
        } catch (error: any) {
            toast.error(
                error.message ||
                    'An error ocurred while trying to delete this friend.'
            )
        } finally {
            setOpen(false)
            setLoading(false)
        }
    }

    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id)
        toast.success('Friend ID copied to clipboard.')
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
                        onClick={() => router.push(`/home/profile/${data.id}`)}
                    >
                        <View className="mr-2 h-4 w-4" /> View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onCopy(data.id)}>
                        <Copy className="mr-2 h-4 w-4" /> Copy Id
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
