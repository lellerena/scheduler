import * as z from 'zod'

export const formSchema = z.object({
    name: z.string().min(1)
})

export const billboardSchena = z.object({
    label: z.string().min(1),
    imageUrl: z.string().min(1)
})

export const categorySchema = z.object({
    name: z.string().min(2),
    billboardId: z.string().min(1),
    imageUrl: z.string().min(1)
})

export const sizeSchema = z.object({
    name: z.string().min(1),
    value: z.string().min(1)
})

export const colorSchema = z.object({
    name: z.string().min(2),
    value: z.string().min(4).max(9).regex(/^#/, {
        message: 'String must be a valid hex code'
    })
})

export const productSchema = z.object({
    name: z.string().min(1),
    images: z.object({ url: z.string() }).array(),
    price: z.coerce.number().min(1),
    categoryId: z.string().min(1),
    colorId: z.string().min(1),
    sizeId: z.string().min(1),
    isFeatured: z.boolean().default(false).optional(),
    isArchived: z.boolean().default(false).optional()
})
