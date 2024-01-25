'use client'

import { ExitIcon } from '@radix-ui/react-icons'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LogoutButton } from '@/components/auth/logout-button'
import { User2 } from 'lucide-react'
import UserIcon from './ui/icons/UserIcon'
import Link from 'next/link'

export const UserButton = () => {
    const user = useCurrentUser()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ''} />
                    <AvatarFallback className="bg-sky-500">
                        <UserIcon className="text-white" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuItem>
                    <User2 />
                    <strong>{user?.name}</strong>
                </DropdownMenuItem>
                <Link href="/home/profile">
                    <DropdownMenuItem>
                        <UserIcon className="h-4 w-4 mr-2" />
                        <strong>My Profile</strong>
                    </DropdownMenuItem>
                </Link>

                <LogoutButton>
                    <DropdownMenuItem>
                        <ExitIcon className="h-4 w-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
