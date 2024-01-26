'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { LoginSchema } from '@/schemas'
import { Form } from '@/components/ui/form'
import { Field } from '@/components/field'
import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { login } from '@/actions/auth/login'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { SignButton } from '@/components/SignButton'

export default function LoginPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')
    const urlError =
        searchParams.get('error') === 'OAuthAccountNotLinked'
            ? 'Email already in use with different provider!'
            : ''

    const [showTwoFactor, setShowTwoFactor] = useState(false)
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
            code: ''
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            login(values, callbackUrl)
                .then((data) => {
                    if (data?.error) {
                        form.reset()
                        setError(data.error)
                    }

                    if (data?.success) {
                        form.reset()
                        setSuccess(data.success)
                        router.refresh()
                        router.push(callbackUrl || '/home')
                    }

                    if (data?.twoFactor) {
                        setShowTwoFactor(true)
                    }
                })
                .catch(() => setError('Something went wrong'))
        })
    }

    return (
        <>
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl font-semibold">Sign In</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Welcome back! Please sign in to your account.
                    </p>
                </div>
                <div className="flex justify-between mt-4">
                    <SignButton source="google" />
                </div>
                <div className="divide-y divide-gray-200 mt-6">
                    <Form {...form}>
                        <form
                            className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            {!showTwoFactor && (
                                <>
                                    <Field
                                        control={form.control}
                                        name="email"
                                        label="Email Address"
                                        placeholder="Email Addressss"
                                        type="email"
                                        isPending={isPending}
                                    />

                                    <Field
                                        control={form.control}
                                        name="password"
                                        label="Password"
                                        placeholder="Password"
                                        isPending={isPending}
                                        type="password"
                                    />
                                </>
                            )}

                            {showTwoFactor && (
                                <>
                                    <Field
                                        control={form.control}
                                        name="code"
                                        label="Two Factor Code"
                                        placeholder="Two Factor Code"
                                        isPending={isPending}
                                        type="text"
                                    />
                                </>
                            )}
                            <FormError message={error || urlError} />
                            <FormSuccess message={success} />

                            <div
                                className="pt-6 text-xs leading-6 font-bold sm:text-md sm:leading-7 opacity-50 hover:opacity-100
							dark:text-white/60
							"
                            >
                                <p>
                                    Forgot You Password?{' '}
                                    <a
                                        className="text-blue-600 underline "
                                        href="/auth/reset"
                                    >
                                        Reset it here
                                    </a>
                                    .
                                </p>
                            </div>
                            <Button
                                className="mt-3 w-full bg-blue-600 text-white p-2 rounded-md"
                                type="submit"
                                disabled={isPending}
                            >
                                {showTwoFactor ? 'Confirm' : 'Login'}
                            </Button>
                        </form>
                    </Form>
                    <div
                        className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7
					"
                    >
                        <p>
                            Don&apos;t have an account?{' '}
                            <a
                                className="text-blue-600 underline"
                                href="/auth/register"
                            >
                                Register here
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
