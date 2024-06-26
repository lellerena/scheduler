import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Section, SectionGrid, SectionTitle } from '../components/Section'
import { Button } from '@/components/ui/button'
import { delay } from '@/lib/utils'
import UserCard from './components/userCard'
import { getFriendsRequests } from '@/data/users/friends'
import { currentUser } from '@/lib/auth'

export default async function FriendRequestsFragment() {
    const userId = (await currentUser()).id
    const requests = await getFriendsRequests(userId)
    const data = requests.data || []

    return (
        <Section id="friend-requests">
            <SectionTitle>Friend Requests</SectionTitle>
            <SectionGrid>
                {data.map((request) => (
                    <UserCard
                        key={request.id}
                        requestId={request.id}
                        user={request.user}
                    />
                ))}
                {data.length == 0 && (
                    <div className="text-center col-span-full ">
                        You Have No friend requests...
                    </div>
                )}
            </SectionGrid>
        </Section>
    )
}
