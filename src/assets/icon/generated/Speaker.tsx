import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Speaker = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18 2.25H6a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zm0 18H6V3.75h12v16.5zM10.875 7.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM12 18a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm0-6a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
