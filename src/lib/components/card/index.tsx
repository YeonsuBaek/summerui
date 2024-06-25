import Card from './Card'

export interface CardProps {
  id: string
  title: string
  info?: string
  image?: string
  onClick?: () => void
  width?: number
}

export { Card }
