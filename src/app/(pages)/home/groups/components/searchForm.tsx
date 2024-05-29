'use client';

import * as z from 'zod';

import { useState } from 'react';
import { SectionGrid, SectionSubtitle } from './Section';
import SearchBar from '@/components/navbar/searchBar';
import { searchUsersSchema } from '@/schemas';
import toast from 'react-hot-toast';
import { UserType, searchUsers } from '@/data/users/users';
import { useCurrentUser } from '@/hooks/use-current-user';
import { FriendCard } from './friendCard';

export function Searchform({ groupID }: { groupID: string }) {
	const [search, setSearch] = useState<UserType[]>([]);
	const [hasSearched, setHasSearched] = useState(false);
	const [loading, setLoading] = useState(false);
	const userId = useCurrentUser()?.id;

	const onSubmit = async (values: z.infer<typeof searchUsersSchema>) => {
		try {
			setLoading(true);
			// delay
			const res = await searchUsers(values.query, userId!);
			if (!res || res.error) {
				throw new Error(res.error || 'Error, please try again later.');
			}
			toast.success(res.success!);
			setHasSearched(true);
			const data = res.data!;
			const filtered = data.filter(
				(user) =>
					(user.id !== userId &&
						user.friends &&
						user.friends?.length > 0) ||
					(user.friendships && user.friendships?.length > 0)
			);
			setSearch(filtered);
		} catch (error: any) {
			console.log(error);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="mb-[10px]">
				<SearchBar loading={loading} onSubmit={onSubmit} />
			</div>
			<SectionSubtitle>Search Results</SectionSubtitle>
			<div className="h-[40vh] overflow-auto">
				{hasSearched ? (
					<>
						<SectionGrid>
							{search.map((user) => {
								if (!user) return null;

								return (
									<FriendCard
										groupId={groupID}
										key={user.id}
										friend={user}
									/>
								);
							})}
							{search.length == 0 && (
								<p className="text-center">No results found</p>
							)}
						</SectionGrid>
					</>
				) : (
					<p className="text-center">Search for a user...</p>
				)}
			</div>
		</>
	);
}
