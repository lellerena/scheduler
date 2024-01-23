import { Avatar } from '@/components/ui/avatar'
import React from 'react'
import { Section, SectionGrid, SectionTitle } from '../components/Section'

export default function FriendsRequestLoader() {
    const loaderItem = (
        <div className="border rounded-lg p-2 animate-pulse">
            <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                    <div className="bg-gray-200 h-8 w-8 rounded-full"></div>
                </Avatar>
                <div className="grid gap-1">
                    <div className="font-semibold bg-gray-200 h-4 w-20 rounded"></div>
                    <div className="line-clamp-1 text-xs bg-gray-200 h-3 w-24 rounded"></div>
                </div>
            </div>
        </div>
    )

    return (
        <Section id="friends">
            <SectionTitle>Friend Requests</SectionTitle>
            <SectionGrid>
                {Array.from({ length: 4 }, (_, index) => (
                    <React.Fragment key={index}>{loaderItem}</React.Fragment>
                ))}
            </SectionGrid>
        </Section>
    )
}
