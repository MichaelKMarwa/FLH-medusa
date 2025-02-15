export interface Product {
    id: string
    title: string
    thumbnail?: string
    price?: {
      amount: number
      currency_code: string
    }
  }