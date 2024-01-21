import Link from 'next/link'
import { CalendarIcon } from '@/components/ui/icons/CalendarIcon'
import { ThemeToggle } from '@/components/theme-toggle'
import Unauthorized from './unauthorized'
import { currentUser } from '@/lib/auth'
import Authorized from './authorized'
import { Separator } from '../ui/separator'

export default async function Navbar() {
    const user = await currentUser()

    return (
        <>
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <CalendarIcon className="size-7" />
                    <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Scheduler
                    </span>
                </Link>
                {user ? <Authorized /> : <Unauthorized />}
            </header>
            <Separator />
        </>
    )
}
