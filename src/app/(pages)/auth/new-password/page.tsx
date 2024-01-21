'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState, useTransition } from 'react'
import { BeatLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'

import { newVerification } from '@/actions/auth/new-verification'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { NewPasswordSchema } from '@/schemas'
import { newPassword } from '@/actions/auth/new-password'
import { Form } from '@/components/ui/form'
import { Field } from '@/components/field'

export default function NewPassWordPAge() {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const [isPending, startTransition] = useTransition()

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: '',
            passwordConfirmation: ''
        }
    })

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            newPassword(values, token).then((data) => {
                setError(data?.error)
                setSuccess(data?.success)
            })
        })
    }

    return (
        <>
            <div className="max-w-md mx-auto space-y-10">
                <div>
                    <h1 className="text-2xl font-semibold">New Password</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Please enter your new password:
                    </p>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <Field
                            control={form.control}
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                            isPending={isPending}
                        />

                        <Field
                            control={form.control}
                            name="passwordConfirmation"
                            label="Password Confirmation"
                            type="password"
                            placeholder="Password Confirmation"
                            isPending={isPending}
                        />

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                {isPending ? (
                                    <BeatLoader color="white" size={8} />
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </div>

                        {error && <FormError message={error} />}
                        {success && <FormSuccess message={success} />}
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
                    </form>
                </Form>
            </div>
        </>
    )
}
