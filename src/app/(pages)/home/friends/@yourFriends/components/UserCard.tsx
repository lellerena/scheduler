import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { UserType } from '@/data/users/users'

interface UserCardProps {
    friend: UserType
}

export const UserCard = ({ friend }: UserCardProps) => {
    return (
        <div className="border rounded-lg p-2">
            <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                    <AvatarImage alt={friend.name} src={friend.image || ''} />
                    <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <div className="font-semibold">{friend.name}</div>
                    <div className="line-clamp-1 text-xs">{friend.email}</div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
