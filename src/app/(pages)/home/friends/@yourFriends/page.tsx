import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Section, SectionGrid, SectionTitle } from '../components/Section'
import { delay } from '@/lib/utils'

export default async function YourFriendsFragment() {
    // await delay(3000)
    return (
        <Section id="friends">
            <SectionTitle>Your Friends</SectionTitle>
            <SectionGrid>
                <div className="border rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                alt="Friend 1"
                                src="/placeholder-avatar.jpg"
                            />
                            <AvatarFallback>F1</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="font-semibold">Friend 1</div>
                            <div className="line-clamp-1 text-xs">
                                friend1@example.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                alt="Friend 2"
                                src="/placeholder-avatar.jpg"
                            />
                            <AvatarFallback>F2</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="font-semibold">Friend 2</div>
                            <div className="line-clamp-1 text-xs">
                                friend2@example.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                alt="Friend 3"
                                src="/placeholder-avatar.jpg"
                            />
                            <AvatarFallback>F3</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="font-semibold">Friend 3</div>
                            <div className="line-clamp-1 text-xs">
                                friend3@example.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border rounded-lg p-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                alt="Friend 4"
                                src="/placeholder-avatar.jpg"
                            />
                            <AvatarFallback>F4</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <div className="font-semibold">Friend 4</div>
                            <div className="line-clamp-1 text-xs">
                                friend4@example.com
                            </div>
                        </div>
                    </div>
                </div>
            </SectionGrid>
        </Section>
    )
}
