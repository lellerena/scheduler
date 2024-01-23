import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Section, SectionGrid, SectionTitle } from '../components/Section'
import { Button } from '@/components/ui/button'
import { delay } from '@/lib/utils'

export default async function FriendRequestsFragment() {
    // await delay(4000)

    return (
        <Section id="friend-requests">
            <SectionTitle>Friend Requests</SectionTitle>
            <SectionGrid>
                <div className="border rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                alt="Request 1"
                                src="/placeholder-avatar.jpg"
                            />
                            <AvatarFallback>R1</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="font-semibold">Request 1</div>
                            <div className="line-clamp-1 text-xs">
                                request1@example.com
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <Button className="mr-2" size="sm" variant="outline">
                            Reject
                        </Button>
                        <Button size="sm">Accept</Button>
                    </div>
                </div>
                <div className="border rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                alt="Request 2"
                                src="/placeholder-avatar.jpg"
                            />
                            <AvatarFallback>R2</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="font-semibold">Request 2</div>
                            <div className="line-clamp-1 text-xs">
                                request2@example.com
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <Button className="mr-2" size="sm" variant="outline">
                            Reject
                        </Button>
                        <Button size="sm">Accept</Button>
                    </div>
                </div>
            </SectionGrid>
        </Section>
    )
}
