import { nanoid } from 'nanoid';

export type CartType = {
    id: string
    items: CartItem[]
    deliveryMethodId?: number
    paymentIntentId?: string
    clientSecret?: string
}

export type CartItem = {
    productId: number
    productName: string
    price: number
    quantity: number
    pictureUrl: string
    bookPublisher: string
    type: string
}

export class Cart implements CartType {
    id = nanoid();
    items: CartItem[] = [];
    deliveryMethodId?: number
    paymentIntentId?: string
    clientSecret?: string
}