import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

import { UserType } from '@/data/users/users'
import AddFriendButton from '../../components/addFriendButton'

interface UserCardProps {
    user: UserType
    originId: string
}

export const UserCard = ({ user, originId }: UserCardProps) => {
    if (!user || user == null) return null

    return (
        <div className="border rounded-lg p-2 flex justify-between flex-col md:flex-row">
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
            <AddFriendButton originId={originId} destinationId={user.id} />
        </div>
    )
}
