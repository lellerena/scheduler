'use client';

import React, { useState } from 'react';
import { Section } from './Section';
import { Users } from 'lucide-react';
import Menu from './Menu';

interface grp {
	id: string;
	name: string;
	description: string;
	adminId: string;
	createdAt: string;
	updatedAt: string;
}

export default function GroupsList({
	data,
	userID,
}: {
	data: Array<grp>;
	userID: string;
	}) {
	
	var [selectedID, setSelectedID] = useState('');
	const reset = () => {
		setSelectedID('');
	};
	
	var selectedGroup = data.find((grp: grp) => {
		return grp.id == selectedID ? true : false;
	});

	const ls = data.map((grp, index) => (
		<React.Fragment key={index}>
			<section onClick={() => setSelectedID(grp.id)} className="flex flex-row border shadow-sm min-h-[150px] rounded-lg p-8 relative hover:border-gray-50 transition-all cursor-pointer">
				<div className="inline-block mr-[8px]">
					<Users className="h-full w-full" />
				</div>
				<div>
					<div className="flex items-center">
						<h1 className="inline-block font-bold text-lg">
							{grp.name}
						</h1>

						{grp.adminId == userID ? (
							<span className="mx-[5px] border-[0.8px] border-solid border-blue-500 rounded-[3px] text-blue-500 text-[0.5em] p-[1.2px]">
								admin
							</span>
						) : (
							<></>
						)}
					</div>
					<p className="">{grp.description}</p>
				</div>
			</section>
		</React.Fragment>
	));
	return selectedID ? <Menu userID={userID} grp={selectedGroup} onClose={reset} /> : ls;
}
