import React, { useState } from 'react';
import { currentUser } from '@/lib/auth';
import { getUserGroups } from '@/data/users/groups';
import { createGroup } from '@/actions/uninorte/groups';
import fs from 'fs/promises';
import GroupsList from './components/GroupsMenu';
import { Modal } from '@/components/ui/modal';
import SectionTitleGroups from './components/SectionTitleGroups';

interface grp {
	id: string;
	name: string;
	description: string;
	adminId: string;
	createdAt: string;
	updatedAt: string;
}

export default async function GroupsPage() {
	const userId = (await currentUser()).id;
	// const data = JSON.parse(
	// 	await fs.readFile('src/app/(pages)/home/groups/data.json', 'utf-8')
	// );
	const data: Array<grp> = (await getUserGroups(userId)).data || [];

	return (
		<>
			<SectionTitleGroups userID={userId} />
			<GroupsList data={data} userID={userId} />
		</>
	);
}
