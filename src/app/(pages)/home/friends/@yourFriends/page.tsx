import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Section, SectionGrid, SectionTitle } from '../components/Section'
import { delay } from '@/lib/utils'
import UserCard from './components/UserCard'
import { getFriends } from '@/data/users/friends'
import { currentUser } from '@/lib/auth'

export default async function YourFriendsFragment() {
    const userId = (await currentUser()).id
    const friends = await getFriends(userId)
    const data =
        friends.data?.map((friend) => {
            if (friend.user.id == userId) {
                return friend.friend
            }
            return friend.user
        }) || []
    return (
        <Section id="friends">
            <SectionTitle>Your Friends</SectionTitle>
            <SectionGrid>
                {data.map((friend) => (
                    <UserCard key={friend.id} friend={friend} />
                ))}
                {data.length == 0 && (
                    <div className="text-center col-span-full ">
                        No friends...
                    </div>
                )}
            </SectionGrid>
        </Section>
    )
}
