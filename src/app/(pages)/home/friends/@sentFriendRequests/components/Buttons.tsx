'use client'

import {
    acceptFriendRequest,
    declineFriendRequest
} from '@/actions/uninorte/friends'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

interface ButtonsProps {
    requestId: string
}

export function Buttons({ requestId }: ButtonsProps) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const path = usePathname()

    const handleReject = useCallback(async () => {
        try {
            setLoading(true)

            const res = await declineFriendRequest(requestId)
            if (!res || res.error) {
                throw new Error(res.error || 'Error, please try again later.')
            }
            toast.success(res.success!)
            router.push(path)
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }, [requestId, path, router])

    return (
        <>
            <Button
                onClick={handleReject}
                disabled={loading}
                className="mr-2"
                size="sm"
            >
                Cancel
            </Button>
        </>
    )
}
