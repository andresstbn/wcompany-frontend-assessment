export type Product = {
    id: number,
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}

export type CreditCardInfo = {
    cardNumber: string
    cardHolder: string
    expirationDate: string
    cvv: string
}