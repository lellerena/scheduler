'use client'

import { useCallback, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'

import { newVerification } from '@/actions/auth/new-verification'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'

export default function VerificationPage() {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const onSubmit = useCallback(() => {
        if (success || error) return

        if (!token) {
            setError('Missing token!')
            return
        }

        newVerification(token)
            .then((data) => {
                setSuccess(data.success)
                setError(data.error)
            })
            .catch(() => {
                setError('Something went wrong!')
            })
    }, [token, success, error])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])

    return (
        <>
            <div className="max-w-md mx-auto space-y-10">
                <div>
                    <h1 className="text-2xl font-semibold">Verification</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Please verify your account:
                    </p>
                </div>
                <div className="flex items-center w-full justify-center">
                    {!success && !error && (
                        <>
                            <BeatLoader />
                            <span>Verifying...</span>
                        </>
                    )}
                    <FormSuccess message={success} />
                    {!success && <FormError message={error} />}
                </div>
            </div>
        </>
    )
}
