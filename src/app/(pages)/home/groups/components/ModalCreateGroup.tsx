import React, { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { createGroup } from '@/actions/uninorte/groups';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

function ModalCreateGroup({
	userID,
	isOpen,
	onClose,
}: {
	userID: string;
	isOpen: boolean;
	onClose: () => void;
}) {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [isPrivate, setIsPrivate] = useState(false);

	function handlerData(event: Event) {
		if (!event.target) return null;

		switch (event.target.id) {
			case 'inp_name':
				setName(event.target.value);
				break;
			case 'area_description':
				setDescription(event.target.value);
				break;
			case 'check_private':
				setIsPrivate(event.target.checked);
				break;
		}
	}

	return (
		<Modal
			description=""
			isOpen={isOpen}
			onClose={() => onClose()}
			title="New Group"
		>
			<h2 className="my-[10px] mt-0">Group Name</h2>
			<Input
				id={'inp_name'}
				type="text"
				className="my-[5px]"
				onChange={handlerData}
			></Input>
			<h2 className="my-[5px]">Description</h2>
			<textarea
				id={'area_description'}
				className={
					'flex h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none my-[5px]'
				}
				onChange={handlerData}
			></textarea>
			<div className="flex justify-between items-center">
				<Button
					className="my-[10px] mb-0"
					onClick={() => {
						createGroup(
							name,
							description,
							userID,
							isPrivate ? 'PRIVATE' : 'PUBLIC',
							''
						);
						onClose();
					}}
				>
					Create
				</Button>
				<span>
					<input
						id={'check_private'}
						type="checkbox"
						className="mr-2 peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
						onChange={handlerData}
					/>
					Private
				</span>
			</div>
		</Modal>
	);
}

export default ModalCreateGroup;
