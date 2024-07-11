import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Minus = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 12a.75.75 0 01-.75.75H3.75a.75.75 0 110-1.5h16.5A.75.75 0 0121 12z" fill={fillColor} />
    </svg>
  )
}
