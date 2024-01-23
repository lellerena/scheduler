import { Section, SectionGrid, SectionTitle } from '../components/Section'
import UserCard from './components/userCard'
import { getSentFriendsRequests } from '@/data/users/friends'
import { currentUser } from '@/lib/auth'

export default async function FriendRequestsFragment() {
    const userId = (await currentUser()).id
    const requests = await getSentFriendsRequests(userId)
    const data = requests.data || []

    return (
        <Section id="friend-requests">
            <SectionTitle>Sent Friend Requests</SectionTitle>
            <SectionGrid>
                {data.map((request) => (
                    <UserCard
                        key={request.id}
                        requestId={request.id}
                        user={request.friend}
                    />
                ))}
                {data.length == 0 && (
                    <div className="text-center col-span-full ">
                        You Have Not sent any friend requests...
                    </div>
                )}
            </SectionGrid>
        </Section>
    )
}
