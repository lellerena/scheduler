interface SectionProps {
    children: React.ReactNode
    id: string
}

export function Section({ children, id }: SectionProps) {
    return (
        <section
            id={id}
            className="border shadow-sm rounded-lg py-8 px-4 relative"
        >
            {children}
        </section>
    )
}

export function SubSection({ children }: { children: React.ReactNode }) {
    return <div className="border-b py-4">{children}</div>
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-lg font-bold  m-4 mt-0">{children}</h2>
}

export function SectionSubtitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-base font-bold m-4 mt-0">{children}</h3>
}

export function SectionGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
            {children}
        </div>
    )
}
