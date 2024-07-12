import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const GreaterThan = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 12a.75.75 0 01-.43.678l-14.25 6.75a.75.75 0 11-.642-1.356L18.498 12 5.679 5.928a.75.75 0 11.643-1.356l14.25 6.75A.751.751 0 0121 12z"
        fill={fillColor}
      />
    </svg>
  )
}
