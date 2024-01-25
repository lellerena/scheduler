import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User } from 'next-auth'

interface MeCardProps {
    data: User
}

export function MeCard({ data }: MeCardProps) {
    return (
        <Card className="col-span-2 lg:col-span-1">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                    <AvatarImage
                        alt="User Avatar"
                        src={data.image || '/images/avatar.png'}
                    />
                    <AvatarFallback>{data.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        {/* @ts-ignore */}
                        {data.description || 'No description'}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
