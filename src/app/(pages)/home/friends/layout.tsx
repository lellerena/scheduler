import { CalendarIcon } from '@/components/ui/icons/CalendarIcon'
import { LayoutGridIcon } from '@/components/ui/icons/LayoutGridIcon'
import UserIcon from '@/components/ui/icons/UserIcon'
import {
    GitCompareIcon,
    SearchIcon,
    UploadIcon,
    UserPlusIcon,
    Users2Icon
} from 'lucide-react'
import Link from 'next/link'

interface LayoutProps {
    children: React.ReactNode
    searchUsers: React.ReactNode
    yourFriends: React.ReactNode
    friendRequests: React.ReactNode
    sentFriendRequests: React.ReactNode
}

export default function Layout({
    children,
    searchUsers,
    yourFriends,
    friendRequests,
    sentFriendRequests
}: LayoutProps) {
    return (
        <>
            <div
                className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]
				 grid-cols-[1fr] relative
			"
            >
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 ">
                    <div className="flex flex-col gap-2 fixed top-[50vh] -translate-y-1/2 ">
                        <div className="flex h-[60px] items-center px-6">
                            <Link
                                className="flex items-center gap-2 font-semibold"
                                href="#"
                            >
                                <Users2Icon className="h-6 w-6" />
                                <span className="">Friends & Scheduler</span>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start px-4 text-sm font-medium">
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#friends"
                                >
                                    <UserIcon className="h-4 w-4" />
                                    Friends List
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <UserPlusIcon className="h-4 w-4" />
                                    Friend Requests
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <SearchIcon className="h-4 w-4" />
                                    Search Users
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <CalendarIcon className="h-4 w-4" />
                                    Scheduler
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <LayoutGridIcon className="h-4 w-4" />
                                    Conflict Matrix
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <UploadIcon className="h-4 w-4" />
                                    Import Schedule
                                </Link>
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                >
                                    <GitCompareIcon className="h-4 w-4" />
                                    Compare Schedules
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 ">
                        <Link className="lg:hidden" href="#">
                            <Users2Icon className="h-6 w-6" />
                            <span className="sr-only">Home</span>
                        </Link>
                        <div className="flex-1">
                            <h1 className="font-semibold text-lg">
                                Friends & Scheduler
                            </h1>
                        </div>
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 overflow-y-auto">
                        {yourFriends}
                        {friendRequests}
                        {searchUsers}
                        {sentFriendRequests}
                    </main>
                </div>
            </div>
        </>
    )
}
