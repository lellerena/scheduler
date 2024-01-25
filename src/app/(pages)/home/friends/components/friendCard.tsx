import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { UserType } from '@/data/users/users'
import { FriendCellAction } from './friend-cell-action'

interface FriendCardProps {
    friend: UserType
    userId: string
}

export const FriendCard = ({ friend, userId }: FriendCardProps) => {
    return (
        <div className="border rounded-lg p-2 flex justify-between">
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
            <FriendCellAction data={friend} userId={userId} />
        </div>
    )
}
