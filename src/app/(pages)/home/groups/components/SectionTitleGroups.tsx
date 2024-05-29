'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ModalCreateGroup from './ModalCreateGroup';

export default function SectionTitleGroups({userID} : {userID: string}) {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<div className="flex justify-between items-center">
				<section className="text-lg font-bold">Your groups</section>
				<Button onClick={() => setModalOpen(true)}>
					<Plus className="mr-1" />
					New Group
				</Button>
			</div>
			<ModalCreateGroup userID={userID} isOpen={modalOpen} onClose={() => {setModalOpen(false)}} />
		</>
	);
}
