import React from 'react';
import { currentUser } from '@/lib/auth';
import { getUserGroups } from '@/data/users/groups';
import { createGroup } from '@/actions/uninorte/groups';
import fs from 'fs/promises';
import GroupsList from './components/GroupsMenu';
import { SectionTitle } from './components/Section';
import Menu from './components/Menu';

interface grp {
	id: string;
	name: string;
	description: string;
	adminId: string;
	createdAt: string;
	updatedAt: string;
}

export default async function GroupsPage() {
	// Get data
	// const respose = await createGroup('Prueba2', 'Esta es otra prueba', user.id);
	// console.log(respose.data);

	const userId = (await currentUser()).id;
	const data = JSON.parse(
		await fs.readFile('src/app/(pages)/home/groups/data.json', 'utf-8')
	);

	return (
		<>
			<SectionTitle>Your groups</SectionTitle>
			<GroupsList data={data} userID={userId} />
		</>
	);
}
