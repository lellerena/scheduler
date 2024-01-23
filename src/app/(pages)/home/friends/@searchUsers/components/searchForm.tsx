'use client'

import * as z from 'zod'

import { useState } from 'react'
import { SectionGrid, SectionSubtitle } from '../../components/Section'
import { UserCard } from './userCard'
import SearchBar from '@/components/navbar/searchBar'
import { searchUsersSchema } from '@/schemas'
import toast from 'react-hot-toast'
import { UserType, searchUsers } from '@/data/users/users'
import { useCurrentUser } from '@/hooks/use-current-user'

export function Searchform() {
    const [search, setSearch] = useState<UserType[]>([])
    const [hasSearched, setHasSearched] = useState(false)
    const [loading, setLoading] = useState(false)
    const userId = useCurrentUser()?.id

    const onSubmit = async (values: z.infer<typeof searchUsersSchema>) => {
        try {
            setLoading(true)
            // delay
            const res = await searchUsers(values.query)
            if (!res || res.error) {
                throw new Error(res.error || 'Error, please try again later.')
            }
            toast.success(res.success!)
            setHasSearched(true)
            const data = res.data!
            const filtered = data.filter((user) => user.id !== userId)
            setSearch(filtered)
        } catch (error: any) {
            console.log(error)
            toast.error(error.error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="absolute  top-[23px] right-5 ">
                <SearchBar loading={loading} onSubmit={onSubmit} />
            </div>
            {hasSearched && (
                <>
                    <SectionSubtitle>Search Results</SectionSubtitle>
                    <SectionGrid>
                        {search.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                        {search.length == 0 && (
                            <p className="text-center">No results found</p>
                        )}
                    </SectionGrid>
                </>
            )}
        </>
    )
}
