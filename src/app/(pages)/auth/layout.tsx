export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 
		dark:bg-gray-900 dark:text-gray-100
		"
        >
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl
				dark:from-cyan-600 dark:to-cyan-900
				"
                />
                <div
                    className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20
				dark:bg-gray-800
				"
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
