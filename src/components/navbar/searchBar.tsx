'use client'

import { useCallback, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { searchUsersSchema } from '@/schemas'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form'

interface SearchBarProps {
    onSubmit?: SubmitHandler<z.infer<typeof searchUsersSchema>>
    loading?: boolean
}

const defaultProps: SearchBarProps = {
    onSubmit: async (values: z.infer<typeof searchUsersSchema>) => {
        console.log(`
			SearchBar
		`)
    },
    loading: false
}

export default function SearchBar({
    onSubmit,
    loading
}: SearchBarProps = defaultProps) {
    const [isMounted, setIsMounted] = useState(false)

    const form = useForm<z.infer<typeof searchUsersSchema>>({
        resolver: zodResolver(searchUsersSchema),
        defaultValues: {
            query: ''
        }
    })

    useEffect(() => {
        setIsMounted(true)
    }, [])
    const defaultOnSubmit = useCallback(
        async (values: z.infer<typeof searchUsersSchema>) => {
            console.log(`
			You have submitted: but not implemented
			`)
        },
        []
    )

    if (!isMounted) {
        return null
    }

    return (
        <Form {...form}>
            <form
                className="ml-auto flex-1 sm:flex-initial"
                onSubmit={form.handleSubmit(onSubmit || defaultOnSubmit)}
            >
                <div className="relative flex">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />

                    <FormField
                        name="query"
                        disabled={loading}
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-3">
                                <FormControl>
                                    <Input
                                        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                                        id="search"
                                        placeholder="Search friends..."
                                        type="search"
                                        {...field}
                                        disabled={loading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        className="ml-2  flex"
                        size="icon"
                        variant={'outline'}
                    >
                        <SearchIcon />
                    </Button>
                </div>
            </form>
        </Form>
    )
}
