import { Button } from '@/components/ui/button'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { Link } from 'lucide-react'

export default function ErrorPage() {
    return (
        <div>
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />

                <Link href="/auth/login" className="text-destructive ml-2">
                    <Button>Go back To Login</Button>
                </Link>
            </div>
        </div>
    )
}
