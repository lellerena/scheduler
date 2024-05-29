import SubNavbar from './components/Navbar';
import {
    Plus,
    Contact,
    Component,
    Users
} from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
	const navOptions = [
		{
			title: 'My Groups',
			icon: <Contact className="h-4 w-4" />,
			link: '/home/groups',
        },
		{
            title: 'Join',
			icon: <Users className="h-4 w-4" />,
			link: '/home/groups/allgroups',
		},
        {
            title: 'Requests',
            icon: <Plus className="h-4 w-4" />,
			link: '/home/groups/requests',
        },
    ];

	return (
		<div
			className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]
				 grid-cols-[1fr] relative
			"
		>
			<div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
				<div className="flex flex-col w-[280px] gap-2 fixed top-[50vh] -translate-y-1/2 ">
					<div className="flex h-[60px] items-center px-6">
						<Link
							className="flex items-center gap-2 font-semibold"
							href="#"
						>
							<Component className="h-6 w-6" />
							<span className="">Friends Groups</span>
						</Link>
					</div>
					<SubNavbar lnks={navOptions} slc={0} />
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 ">
					<div className="flex-1">
						<h1 className="font-semibold text-lg">Groups</h1>
					</div>
				</header>
				<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 overflow-y-auto">
					{children}
				</main>
			</div>
		</div>
	);
}
