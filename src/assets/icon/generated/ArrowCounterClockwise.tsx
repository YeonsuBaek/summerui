import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowCounterClockwise = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 12a9 9 0 01-8.88 9H12a8.942 8.942 0 01-6.178-2.456.751.751 0 011.031-1.09 7.5 7.5 0 10-.18-10.738L4.18 9h2.57a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.794l2.648-2.419A9 9 0 0121 12z"
        fill={fillColor}
      />
    </svg>
  )
}
