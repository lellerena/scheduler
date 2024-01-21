import Link from 'next/link'
import { Button } from '../ui/button'
import { ThemeToggle } from '../theme-toggle'
import { UserButton } from '../user-button'

const links = [
    { to: '/home/schedules', label: 'My Schedules' },
    { to: '/home/groups', label: 'Friends Groups' },
    { to: '/home/settings', label: 'Settings' }
]

export default function Authorized() {
    return (
        <>
            <nav className="ml-5 flex gap-4 sm:gap-6 items-center">
                {links.map(({ to, label }) => (
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
                        key={to}
                        href={to}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
            <div className="ml-auto flex gsp-4 sm:gap-6 items-center">
                <ThemeToggle />
                <UserButton />
            </div>
        </>
    )
}
