import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { leaveGroup, requestGroupJoin } from '@/actions/uninorte/groups';

interface grp {
	id: string;
	name: string;
	description: string;
	adminId: string;
	createdAt: Date;
	updatedAt: Date;
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
								Created: {grp.createdAt.toUTCString()}
							</span>
						</div>
						<p className="my-[10px]">{grp.description}</p>
					</div>
					<div className="flex h-1/5 justify-center">
						<Button onClick={() => requestGroupJoin(userID, grp.id)}>
							Send Request
						</Button>
					</div>
				</div>
			</Section>
		</>
	);
}
