'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ResetSchema } from '@/schemas'
import { Form } from '@/components/ui/form'
import { Field } from '@/components/field'
import { useState, useTransition } from 'react'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { reset } from '@/actions/auth/reset'

export default function LoginPage() {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: ''
        }
    })

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            reset(values).then((data) => {
                setError(data?.error)
                setSuccess(data?.success)
            })
        })
    }
    return (
        <>
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Forgot Your Password?
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Enter your email address below and we&apos;ll send you a
                        link to reset your password.
                    </p>
                </div>

                <div className="divide-y divide-gray-200 mt-6">
                    <Form {...form}>
                        <form
                            className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <>
                                <Field
                                    control={form.control}
                                    name="email"
                                    label="Email Address"
                                    placeholder="Email Addressss"
                                    type="email"
                                    isPending={isPending}
                                />
                            </>

                            <FormError message={error} />
                            <FormSuccess message={success} />
                            <Button
                                className="mt-3 w-full bg-blue-600 text-white p-2 rounded-md"
                                type="submit"
                                disabled={isPending}
                            >
                                Reset
                            </Button>
                        </form>
                    </Form>
                    <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                        <p>
                            Go back to{' '}
                            <a
                                className="text-blue-600 underline"
                                href="/auth/login"
                            >
                                Login
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
