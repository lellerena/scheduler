'use client';

import React, { useState } from 'react';

export default function SectionTitleGroups({userID} : {userID: string}) {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<div className="flex justify-between items-center">
				<section className="text-lg font-bold">All groups</section>
			</div>
		</>
	);
}
