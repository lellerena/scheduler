import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { UserPlusIcon } from 'lucide-react'
import { User } from '@prisma/client'
import { UserType } from '@/data/users/users'

interface UserCardProps {
    user: UserType
}

export const UserCard = ({ user }: UserCardProps) => {
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
            <div className="flex justify-end mt-2">
                <Button size="sm" className="flex gap-2">
                    <UserPlusIcon className="h-4 w-4" />
                    Add Friend
                </Button>
            </div>
        </div>
    )
}
