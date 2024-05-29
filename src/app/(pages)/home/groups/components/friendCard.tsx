import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { UserType } from '@/data/users/users';
import { Button } from '@/components/ui/button';
import { UserCheck } from 'lucide-react';
import { sendGroupInvitation } from '@/actions/uninorte/groups';

interface FriendCardProps {
	groupId: string;
	friend: UserType;
}

export const FriendCard = ({ groupId, friend }: FriendCardProps) => {
	return (
		<div className="border rounded-lg p-2 ">
			<div className="flex items-center">
				<Avatar className="h-8 w-8 mr-[10px]">
					<AvatarImage alt={friend.name} src={friend.image || ''} />
					<AvatarFallback>{friend.name[0]}</AvatarFallback>
				</Avatar>
				<div className="grid gap-1">
					<div className="font-semibold">{friend.name}</div>
					<div className="line-clamp-1 text-xs">{friend.email}</div>
				</div>
			</div>
			<div className="flex justify-center mt-[10px]">
				<Button onClick={() => sendGroupInvitation(groupId, friend.id)}>
					<UserCheck className='mr-[5px]'/>
					Invite Friend
				</Button>
			</div>
		</div>
	);
};
