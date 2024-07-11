import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CreditCard = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 4.5H3A1.5 1.5 0 001.5 6v12A1.5 1.5 0 003 19.5h18a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0021 4.5zM21 6v2.25H3V6h18zm0 12H3V9.75h18V18zm-1.5-2.25a.75.75 0 01-.75.75h-3a.75.75 0 110-1.5h3a.75.75 0 01.75.75zm-6 0a.75.75 0 01-.75.75h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
