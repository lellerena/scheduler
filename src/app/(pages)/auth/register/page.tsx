'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { RegisterSchema } from '@/schemas'
import { Form } from '@/components/ui/form'
import { Field } from '@/components/field'
import { useState, useTransition } from 'react'
import { register } from '@/actions/auth/register'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { SignButton } from '@/components/SignButton'

export default function SignUpPage() {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
            terms: false
        }
    })

    function onSubmit(values: z.infer<typeof RegisterSchema>) {
        setError('')
        setSuccess('')

        startTransition(() => {
            register(values).then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }

    return (
        <>
            <div className="max-w-md mx-auto">
                <div>
                    <h1 className="text-2xl font-semibold">Register</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Please fill in the form to create an account or register
                        with:
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
                            <Field
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Name"
                                type="text"
                                isPending={isPending}
                            />
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

                            <Field
                                control={form.control}
                                name="passwordConfirmation"
                                label="Password Confirmation"
                                placeholder="Password Confirmation"
                                isPending={isPending}
                                type="password"
                            />

                            <Field
                                control={form.control}
                                name="terms"
                                variant="checkbox"
                                label="Terms and Conditions"
                                isPending={isPending}
                                type="checkbox"
                            />
                            <FormError message={error} />
                            <FormSuccess message={success} />

                            <Button
                                className="mt-3 w-full bg-blue-600 text-white p-2 rounded-md"
                                type="submit"
                                disabled={isPending}
                            >
                                Register
                            </Button>
                        </form>
                    </Form>
                    <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                        <p>
                            Already have an account?{' '}
                            <a
                                className="text-blue-600 underline"
                                href="/auth/login"
                            >
                                Login here
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
