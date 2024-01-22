'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Modal } from '@/components/ui/modal'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { useNewScheduleModal } from '@/hooks/use-new-schedule-store'
import { Button } from '@/components/ui/button'
import { importNewScheduleSchema, newScheduleUnLoginSchema } from '@/schemas'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getUnSchedule } from '@/actions/uninorte/schedule'
import { useCurrentUser } from '@/hooks/use-current-user'

export default function SchedulesForm() {
    const [isMounted, setIsMounted] = useState(false)
    const [loading, setLoading] = useState(false)
    const storeModal = useNewScheduleModal()
    const session = storeModal.session
    const router = useRouter()
    const userId = useCurrentUser()?.id

    const form = useForm<z.infer<typeof importNewScheduleSchema>>({
        resolver: zodResolver(importNewScheduleSchema),
        defaultValues: {
            termId: '',
            token: session?.data.token,
            userId
        }
    })

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    if (!session) {
        storeModal.setStep(0)
    }

    const onSubmit = async (
        values: z.infer<typeof importNewScheduleSchema>
    ) => {
        try {
            setLoading(true)
            // delay
            const res = await getUnSchedule(values)
            if (!res || res.error) {
                throw new Error(res.error || 'Error, please try again later.')
            }
            toast.success(res.success!)

            router.push(`/home/schedules/new`)
            storeModal.onClose()
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h3>
                You are Logged In as:
                {session?.data.pomelo.fullName}
            </h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="termId"
                        disabled={loading}
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-2   ">
                                <FormLabel>Periodo</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Select a period to import the schedule" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <div className="py-1">
                                            {session?.data.pomelo.terms.map(
                                                (term) => (
                                                    <div
                                                        key={term.id}
                                                        className="flex items-center justify-between px-4  text-sm  cursor-pointer"
                                                    >
                                                        <SelectItem
                                                            value={term.id}
                                                        >
                                                            <span>
                                                                {term.name}
                                                            </span>
                                                        </SelectItem>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                        <Button
                            disabled={loading}
                            variant="outline"
                            onClick={storeModal.onClose}
                        >
                            Cancel
                        </Button>
                        <Button disabled={loading} type="submit">
                            Continue
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}
