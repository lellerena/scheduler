import React from 'react'
import {
    Section,
    SectionGrid,
    SectionSubtitle,
    SectionTitle,
    SubSection
} from '../components/Section'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { UserPlusIcon } from 'lucide-react'
import { delay } from '@/lib/utils'

export default function SearchUsersLoader() {
    const loaderItem = (
        <div className="border rounded-lg p-2 animate-pulse flex justify-between">
            <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                    <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
                </Avatar>
                <div className="grid gap-1">
                    <div className="font-semibold bg-gray-200 h-4 w-20 rounded"></div>
                    <div className="line-clamp-1 text-xs bg-gray-200 h-3 w-24 rounded"></div>
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <Button size="sm" className="flex gap-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="bg-gray-200 h-4 w-16 rounded"></div>
                </Button>
            </div>
        </div>
    )

    return (
        <Section id="search-users">
            <div className="flex items-center">
                <SectionTitle>Search Users</SectionTitle>
                {/* Placeholder for the SearchBar loader */}
                <div className="bg-gray-200 h-8 w-40 rounded ml-auto"></div>
            </div>

            <SubSection>
                <SectionSubtitle>Search Results</SectionSubtitle>
                <SectionGrid>
                    {/* Rendering multiple loader items */}
                    {Array.from({ length: 4 }, (_, index) => (
                        <React.Fragment key={index}>
                            {loaderItem}
                        </React.Fragment>
                    ))}
                </SectionGrid>
            </SubSection>

            <SubSection>
                <SectionSubtitle>Suggested Users</SectionSubtitle>
                <SectionGrid>
                    {/* Rendering multiple loader items */}
                    {Array.from({ length: 4 }, (_, index) => (
                        <React.Fragment key={index}>
                            {loaderItem}
                        </React.Fragment>
                    ))}
                </SectionGrid>{' '}
            </SubSection>
        </Section>
    )
}
