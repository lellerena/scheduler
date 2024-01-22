import Link from 'next/link'

export default function RootPage() {
    return (
        <div className="flex flex-col min-h-[100vh] dark:bg-gray-900 dark:text-gray-100">
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y dark:border-gray-700">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 pb-24 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] dark:text-gray-200">
                                    Scheduler: Your Personal Schedule Manager
                                </h1>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Share your schedules, create conflict
                                    matrixes, and import schedules directly from
                                    Uninorte. All in one place.
                                </p>
                                <div className="space-x-4">
                                    <Link
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="/home/schedules"
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                                    Schedule Sharing
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-gray-200">
                                    Share your schedule with friends
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Share your schedule with your friends and
                                    see when everyone is free. Perfect for
                                    planning group study sessions, meetings, and
                                    hangouts.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Easy Sharing
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Share your schedule with just a click. No
                                    need to manually input your schedule to
                                    share it with friends.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Real-Time Updates
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Changes to your schedule are automatically
                                    updated for everyone you&apos;ve shared it
                                    with.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Privacy Control
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Control who can see your schedule. You can
                                    stop sharing your schedule at any time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
                    <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-200">
                                Conflict Matrix Creation
                            </h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Create a conflict matrix to easily see when
                                everyone is free. Perfect for planning group
                                study sessions, meetings, and hangouts.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Automated Matrix Creation
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Automatically create a conflict matrix from
                                    shared schedules. No need to manually input
                                    schedules.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Real-Time Updates
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Changes to schedules are automatically
                                    updated in the conflict matrix.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Easy to Understand
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Our conflict matrix is easy to understand,
                                    so you can quickly see when everyone is
                                    free.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
                    <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-gray-200">
                                Seamless Schedule Import from Uninorte
                            </h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Import your schedule directly from the Uninorte
                                university page. No need to manually input your
                                schedule.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Easy Import
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Import your schedule with just a click. No
                                    need to manually input your schedule.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Real-Time Updates
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Changes to your Uninorte schedule are
                                    automatically updated in Scheduler.
                                </p>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="text-lg font-bold dark:text-gray-200">
                                    Privacy Control
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Control who can see your schedule. You can
                                    stop sharing your schedule at any time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Scheduler. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4 dark:text-gray-300"
                        href="#"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4 dark:text-gray-300"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4 dark:text-gray-300"
                        href="#"
                    >
                        Social Media
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
