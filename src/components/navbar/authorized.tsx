import Link from 'next/link'
import { ThemeToggle } from '../theme-toggle'
import { UserButton } from '../user-button'
import SearchBar from './searchBar'

const links = [
    { to: '/home', label: 'Home' },
    { to: '/home/schedules', label: 'My Schedules' },
    { to: '/home/friends', label: 'My Friends' },
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
                <SearchBar />
                <ThemeToggle />
                <UserButton />
            </div>
        </>
    )
}
