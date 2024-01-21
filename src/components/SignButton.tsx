'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Google, TwitterColor } from '@/components/ui/icons'

import { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { capitalizeFirstLetter, cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'

export const signButtonVariants = cva(['w-full'], {
    variants: {
        source: {
            google: [
                'bg-google',
                'hover:bg-googleHover',
                'focus:bg-googleHover'
            ],
            twitter: [
                'bg-twitter',
                'hover:bg-twitterHover',
                'focus:bg-twitterHover'
            ]
        }
    },
    defaultVariants: {
        source: 'google'
    }
})

interface SignButtonProps {}
type Props = SignButtonProps &
    VariantProps<typeof signButtonVariants> &
    ComponentProps<'button'>

export function SignButton({ source, className, ...props }: Props) {
    if (!source) throw new Error('source is required')

    const handleClick = () => {
        if (source === 'google') {
            signIn('google', { callbackUrl: '/' })
        }

        if (source === 'twitter') {
            signIn('twitter', { callbackUrl: '/' })
        }
    }

    return (
        <Button
            // {...props}
            className={cn({ className }) + 'w-full'}
            onClick={handleClick}
        >
            {source === 'google' && <Google />}
            {source === 'twitter' && <TwitterColor />}

            <span>Continue with {capitalizeFirstLetter(source)}</span>
        </Button>
    )
}
