'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Save } from 'lucide-react'
import * as z from 'zod'

import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import {
    ScheduleIdColumn,
    scheduleColumns
} from '../../../../../../components/schedule/schedule-columns'
import { ScheduleTable } from '../../../../../../components/schedule/schedule-table'
import { newScheduleSchema } from '@/schemas'
import { useEffect, useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { ScheduleVisibility } from '@prisma/client'
import { useCurrentUser } from '@/hooks/use-current-user'
import { createSchedule } from '@/actions/uninorte/schedule'
import toast from 'react-hot-toast'

export default function NewSchedule({ schedule }: { schedule: string }) {
    const res = JSON.parse(schedule!)

    const period = res.period
    const user = useCurrentUser()
    const data = res.data as ScheduleIdColumn[]

    const [isMounted, setIsMounted] = useState(false)
    const [loading, setLoading] = useState(false)
    const visibilityOptions = Object.values(ScheduleVisibility)
    const router = useRouter()
    const pathname = usePathname().split('?')[0] as string

    const form = useForm<z.infer<typeof newScheduleSchema>>({
        resolver: zodResolver(newScheduleSchema),
        defaultValues: {
            name: '',
            period: period!,
            visibility: ScheduleVisibility.PRIVATE,
            userId: user?.id
        }
    })

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    const onSubmit = async (values: z.infer<typeof newScheduleSchema>) => {
        try {
            setLoading(true)

            const res = await createSchedule(values, data)

            if (!res || res.error) {
                throw new Error(res.error || 'Error, please try again later.')
            }
            toast.success(res.success!)

            router.push(`/home/schedules/`)
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between">
                    <Heading
                        title={`New Schedule`}
                        description="Manage Your new Schedule"
                    />
                    <div className="flex">
                        <Button onClick={() => {}}>
                            <Plus className="mr-2 h-4 w-4" /> Add New
                        </Button>
                    </div>
                </div>
                <div className="flex">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center ">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    disabled={loading}
                                    render={({ field }) => (
                                        <FormItem className="grid grid-cols-4 items-center gap-2   ">
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={loading}
                                                    placeholder="lellerena"
                                                    {...field}
                                                    className="col-span-3"
                                                />
                                            </FormControl>
                                            <FormMessage className="col-span-4" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="period"
                                    render={({ field }) => (
                                        <FormItem className="grid grid-cols-4 items-center gap-2">
                                            <FormLabel>Periodo</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={true}
                                                    placeholder="lellerena"
                                                    {...field}
                                                    className="col-span-3"
                                                />
                                            </FormControl>
                                            <FormMessage className="col-span-4" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="visibility"
                                    disabled={loading}
                                    render={({ field }) => (
                                        <FormItem className="grid grid-cols-4 items-center gap-2   ">
                                            <FormLabel>Visibility</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="col-span-3">
                                                        <SelectValue placeholder="PRIVATE" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <div className="py-1">
                                                        {visibilityOptions.map(
                                                            (option) => (
                                                                <div
                                                                    key={option}
                                                                    className="flex items-center justify-between px-4  text-sm  cursor-pointer"
                                                                >
                                                                    <SelectItem
                                                                        value={
                                                                            option
                                                                        }
                                                                    >
                                                                        <span>
                                                                            {
                                                                                option
                                                                            }
                                                                        </span>
                                                                    </SelectItem>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className="col-span-4" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex mt-4">
                                <Button disabled={loading} type="submit">
                                    <Save className="mr-2 h-4 w-4" /> Save
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>

                <Separator />
                <ScheduleTable
                    searchKey=""
                    columns={scheduleColumns}
                    data={data}
                />
            </div>
        </>
    )
}
