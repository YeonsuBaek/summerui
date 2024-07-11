import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LessThan = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.428 19.07a.75.75 0 01-1 .358l-14.25-6.75a.75.75 0 010-1.356l14.25-6.75a.75.75 0 01.643 1.356L6.252 12l12.819 6.072a.75.75 0 01.357.999z"
        fill={fillColor}
      />
    </svg>
  )
}
