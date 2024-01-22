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
import { newScheduleUnLoginSchema } from '@/schemas'
import { unLogin } from '@/actions/uninorte/unLogin'

export default function LoginForm() {
    const [isMounted, setIsMounted] = useState(false)
    const [loading, setLoading] = useState(false)
    const storeModal = useNewScheduleModal()

    const form = useForm<z.infer<typeof newScheduleUnLoginSchema>>({
        resolver: zodResolver(newScheduleUnLoginSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    const onSubmit = async (
        values: z.infer<typeof newScheduleUnLoginSchema>
    ) => {
        try {
            setLoading(true)
            // delay
            const res = await unLogin(values)
            if (!res || res.error) {
                throw new Error(res.error || 'Error, please try again later.')
            }
            toast.success(res.success!)
            storeModal.setSession(res.data)
            storeModal.setStep(1)
        } catch (error: any) {
            console.log(error)
            toast.error(error.error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="username"
                    disabled={loading}
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-2   ">
                            <FormLabel>UserName</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={loading}
                                    placeholder="lellerena"
                                    {...field}
                                    className="col-span-3"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    disabled={loading}
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-2">
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={loading}
                                    placeholder="********"
                                    type="password"
                                    {...field}
                                    className="col-span-3"
                                />
                            </FormControl>
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
    )
}
