import Card from './Card'

export interface CardProps {
  id: string
  title: string
  info?: string
  image?: string
  size?: 'medium' | 'large'
  onClick?: () => void
}

export { Card }
