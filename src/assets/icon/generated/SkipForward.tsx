import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SkipForward = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.75 3a.75.75 0 00-.75.75v6.49L6.79 3.23A1.495 1.495 0 004.5 4.489V19.51a1.5 1.5 0 002.29 1.26L18 13.76v6.49a.75.75 0 101.5 0V3.75a.75.75 0 00-.75-.75zM6 19.493V4.505l11.985 7.5L6 19.493z"
        fill={fillColor}
      />
    </svg>
  )
}
