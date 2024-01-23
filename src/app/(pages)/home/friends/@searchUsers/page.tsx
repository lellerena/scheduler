import SearchBar from '@/components/navbar/searchBar'
import {
    Section,
    SectionGrid,
    SectionSubtitle,
    SectionTitle,
    SubSection
} from '../components/Section'
import { currentUser } from '@/lib/auth'
import { getSuggestedUsers, searchUsers } from '@/data/users/users'
import { UserCard } from './components/userCard'
import { headers } from 'next/headers'
import { Searchform } from './components/searchForm'

export default async function SearchUsersFragment() {
    const user = await currentUser()
    const sugestions = await getSuggestedUsers(user.id)

    return (
        <Section id="search-users">
            <div className="flex items-center ">
                <SectionTitle>Search Users</SectionTitle>
            </div>

            <SubSection>
                <Searchform />
            </SubSection>

            <SubSection>
                <SectionSubtitle>Suggested Users</SectionSubtitle>
                <SectionGrid>
                    {sugestions.map((suggestedUser) => (
                        <UserCard
                            originId={user.id}
                            key={suggestedUser.id}
                            user={suggestedUser}
                        />
                    ))}
                    {sugestions.length == 0 && (
                        <div className="text-center col-span-full ">
                            No users found...
                        </div>
                    )}
                </SectionGrid>
            </SubSection>
        </Section>
    )
}
