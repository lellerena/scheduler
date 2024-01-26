import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Control } from 'react-hook-form'
import { z } from 'zod'
import { InputHTMLAttributes } from 'react'
import { LoginSchema, RegisterSchema } from '@/schemas'
import { MagicInput } from './ui/magic-input'
import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'

interface FieldProps {
    control: Control<any>
    name:
        | keyof Control<z.infer<typeof RegisterSchema>>['_fields']
        | keyof Control<z.infer<typeof LoginSchema>>['_fields']
    description?: string
    type?: InputHTMLAttributes<HTMLInputElement>['type']
    placeholder?: string
    isTextArea?: boolean
    variant?: 'text' | 'textarea' | 'checkbox'
    data?: string[]
    defaultData?: string
    className?: string
    label?: string
    isPending: boolean
}

export function Field({
    control,
    type = 'text',
    name,
    description,
    placeholder = '',
    variant = 'text',
    label = '',
    isPending
}: FieldProps) {
    return (
        <FormField
            control={control}
            name={name as any}
            render={({ field }) => (
                <FormItem>
                    {/* <FormLabel>{capitalizeFirstLetter(name)}</FormLabel> */}
                    <FormControl>
                        <>
                            {variant === 'textarea' && (
                                <textarea
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-primaryButton border  sm:text-sm text-primaryButton p-5"
                                    {...field}
                                    placeholder={placeholder}
                                    rows={5}
                                    disabled={isPending}
                                />
                            )}

                            {variant === 'text' && (
                                <label>
                                    <FormLabel className="dark:text-white/60">
                                        {label}
                                    </FormLabel>

                                    <Input
                                        id={name}
                                        placeholder="Full Name"
                                        type={type}
                                        {...field}
                                        disabled={isPending}
                                        className="text-white/80"
                                    />
                                </label>
                            )}

                            {variant === 'checkbox' && (
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        disabled={isPending}
                                    />
                                    <label
                                        className="text-sm text-gray-500"
                                        htmlFor="terms"
                                    >
                                        I agree to the{' '}
                                        <a className="underline" href="#">
                                            terms and conditions
                                        </a>
                                        .
                                    </label>
                                </div>
                            )}
                        </>
                    </FormControl>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
