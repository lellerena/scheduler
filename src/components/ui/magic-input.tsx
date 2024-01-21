import { InputProps } from '@/components/ui/input'

interface MagicInputProps extends InputProps {
    id: string
    label: string
    name: string
    placeholder?: string
}

export function MagicInput({
    id,
    label,
    name,
    placeholder,
    ...props
}: MagicInputProps) {
    return (
        <div className="relative">
            <input
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                id={id}
                name={name}
                placeholder={placeholder}
                {...props}
            />
            <label
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-0.5 peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-gray-600 peer-focus:text-sm"
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}
