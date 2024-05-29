import React, { useState } from 'react';
import { Section, SectionTitle, SubSection } from './Section';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { leaveGroup } from '@/actions/uninorte/groups';
import { Modal } from '@/components/ui/modal';
import { Searchform } from './searchForm';

interface grp {
	id: string;
	name: string;
	description: string;
	adminId: string;
	createdAt: string;
	updatedAt: string;
}

export default function Menu({
	userID,
	grp,
	onClose,
}: {
	userID: string;
	grp: grp | undefined;
	onClose: () => void;
}) {
	const [modalOpen, setModalOpen] = useState(false);

	if (!grp) return null;

	return (
		<>
			<Section id="section">
				<div className="h-[45vh]">
					<div className="h-4/5">
						<div className="flex items-center">
							<ArrowLeft
								className="cursor-pointer transition-all hover:text-gray-300"
								onClick={onClose}
							/>
							<div className="mx-[10px]">
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
								<p className="font-light italic text-xs text-gray-500">
									ID: {grp.id}
								</p>
							</div>
							<span className="ml-[auto] mr-0">
								Created: {grp.createdAt}
							</span>
						</div>
						<p className="my-[10px]">{grp.description}</p>
					</div>
					<div className="flex h-1/5 justify-around">
						{userID == grp.adminId ? (
							<Button
								className="transition-all hover:bg-red-600 hover:text-white"
								onClick={() => {
									// deleteGroup(grp.id);
									onClose();
								}}
							>
								Delete
							</Button>
						) : (
							<Button
								className="transition-all hover:bg-red-600 hover:text-white"
								onClick={() => {
									// leaveGroup(userID, grp.id);
									onClose();
								}}
							>
								Leave group
							</Button>
						)}
						<Button onClick={() => setModalOpen(true)}>
							Invite
						</Button>
					</div>
				</div>
			</Section>
			<Modal
				description=""
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				title="Invite Friend"
			>
				<div>
					<Searchform groupID={grp.id} />
				</div>
			</Modal>
		</>
	);
}
