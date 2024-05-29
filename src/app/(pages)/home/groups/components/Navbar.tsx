'use client';

import React from 'react';

import Link from 'next/link';
import { useState } from 'react';

interface lnk {
	title: string;
	icon: React.ReactNode;
	link: string;
}

export default function menu({ lnks, slc }: { lnks: Array<lnk>, slc: number }) {
	const styleSelected =
		'flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50';
	const styleUnSelected =
		'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50';

	const [opt, setOpt] = useState(slc);

	const links = lnks.map((lnk, index) => (
		<Link
			key={index}
			className={index == opt ? styleSelected : styleUnSelected}
			href={lnk.link}
			onClick={() => setOpt(index)}
		>
			{lnk.icon}
			{lnk.title}
		</Link>
	));

	return (
		<nav className="grid items-start px-4 text-sm font-medium">{links}</nav>
	);
}
