import nodemailer from 'nodemailer'

const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD

const domain = process.env.NEXT_PUBLIC_APP_URL

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    },

    auth: {
        user: username,
        pass: password
    }
})

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
    await transporter.sendMail({
        from: username,
        to: email,
        subject: '2FA Code',
        html: `<p>Your 2FA code: ${token}</p>`
    })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`

    await transporter.sendMail({
        from: username,
        to: email,
        subject: 'Reset your password',
        html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
    })
}

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`

    await transporter.sendMail({
        from: username,
        to: email,
        subject: 'Confirm your email',
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
    })
}
