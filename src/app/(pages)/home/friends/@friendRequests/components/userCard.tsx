import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { UserType } from '@/data/users/users'
import { Buttons } from './Buttons'

interface UserCardProps {
    user: UserType
    requestId: string
}

const UserCard = ({ user, requestId }: UserCardProps) => {
    return (
        <div className="border rounded-lg p-2">
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
            <div className="flex justify-end mt-2">
                <Buttons requestId={requestId} />
            </div>
        </div>
    )
}

export default UserCard
