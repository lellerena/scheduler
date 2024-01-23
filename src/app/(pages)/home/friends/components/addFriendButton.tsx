'use client'

import { sendFriendRequest } from '@/actions/uninorte/friends'
import { Button } from '@/components/ui/button'
import { UserPlusIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

interface AddFriendButtonProps {
    originId: string
    destinationId: string
}

export default function AddFriendButton({
    originId,
    destinationId
}: AddFriendButtonProps) {
    const [loading, setLoading] = useState(false)

    const handleClik = useCallback(async () => {
        try {
            setLoading(true)

            const res = await sendFriendRequest(originId, destinationId)
            if (!res || res.error) {
                throw new Error(res.error || 'Error, please try again later.')
            }
            toast.success(res.success!)
        } catch (error) {
        } finally {
            setLoading(false)
        }
    }, [destinationId, originId])

    return (
        <div className="flex justify-end mt-2">
            <Button
                onClick={handleClik}
                disabled={loading}
                size="sm"
                className="flex gap-2"
            >
                <UserPlusIcon className="h-4 w-4" />
                Add Friend
            </Button>
        </div>
    )
}
