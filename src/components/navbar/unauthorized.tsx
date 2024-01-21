import Link from 'next/link'
import { Button } from '../ui/button'
import { ThemeToggle } from '../theme-toggle'

const links = [
    { to: '/login', label: 'Login' },
    { to: '/register', label: 'Register' }
]

export default function Unauthorized() {
    return (
        <>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                <ThemeToggle />

                {links.map(({ to, label }) => (
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-300"
                        key={to}
                        href={to}
                    >
                        <Button variant={'secondary'}>{label}</Button>
                    </Link>
                ))}
            </nav>
        </>
    )
}
