import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import { UserType } from '@/data/users/users'
import AddFriendButton from '../../components/addFriendButton'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'

interface UserCardProps {
    user: UserType
    originId: string
}

export const UserCard = ({ user, originId }: UserCardProps) => {
    if (!user || user == null) return null

    return (
        <div className="border rounded-lg p-2 flex justify-between flex-col gap-1">
            <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                    <AvatarImage alt={user.name} src={user.image || ''} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <div className="font-semibold">{user.name}</div>
                    <div className="line-clamp-1 text-xs">{user.email}</div>
                </div>
            </div>

            <div className="flex justify-end mt-2 gap-1">
                <AddFriendButton originId={originId} destinationId={user.id} />
                <Link href={`/home/profile/${user.id}`}>
                    <Button size={'sm'} className="gap-2">
                        <Eye className="size-4" />
                        View Profile
                    </Button>
                </Link>
            </div>
        </div>
    )
}
