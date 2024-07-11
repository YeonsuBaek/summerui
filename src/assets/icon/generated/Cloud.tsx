import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Cloud = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15 3.75a8.259 8.259 0 00-7.38 4.563 6 6 0 10-.87 11.937H15a8.25 8.25 0 100-16.5zm0 15H6.75a4.5 4.5 0 11.308-8.99A8.25 8.25 0 006.75 12a.75.75 0 101.5 0A6.75 6.75 0 1115 18.75z"
        fill={fillColor}
      />
    </svg>
  )
}
