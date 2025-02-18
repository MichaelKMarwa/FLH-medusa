export interface Product {
  id: string
  title: string
  handle: string
  thumbnail?: string
  description?: string
  price?: {
    amount: number
    original_amount?: number
    currency_code: string
  }
  variants?: Array<{
    id: string
    prices: Array<{
      id: string
      amount: number
      original_amount?: number
      currency_code: string
    }>
  }>
  tags?: Array<{
    id: string
    value: string
  }>
}