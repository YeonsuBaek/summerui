import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LinkSimpleHorizontalBreak = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M2.25 12A3.75 3.75 0 006 15.75h3.75a.75.75 0 110 1.5H6a5.25 5.25 0 110-10.5h3.75a.75.75 0 110 1.5H6A3.75 3.75 0 002.25 12zM18 6.75h-3.75a.75.75 0 100 1.5H18a3.75 3.75 0 110 7.5h-3.75a.75.75 0 100 1.5H18a5.25 5.25 0 100-10.5z"
        fill={fillColor}
      />
    </svg>
  )
}
