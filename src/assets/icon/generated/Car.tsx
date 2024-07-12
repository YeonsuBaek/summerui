import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Car = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.5 9.75h-1.012l-2.605-5.86a1.5 1.5 0 00-1.37-.89H6.486a1.5 1.5 0 00-1.37.89L2.513 9.75H1.5a.75.75 0 000 1.5h.75v7.5a1.5 1.5 0 001.5 1.5H6a1.5 1.5 0 001.5-1.5v-1.5h9v1.5a1.5 1.5 0 001.5 1.5h2.25a1.5 1.5 0 001.5-1.5v-7.5h.75a.75.75 0 100-1.5zM6.488 4.5h11.024l2.334 5.25H4.154L6.487 4.5zM6 18.75H3.75v-1.5H6v1.5zm12 0v-1.5h2.25v1.5H18zm2.25-3H3.75v-4.5h16.5v4.5zm-15-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 110 1.5H6a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75H18a.75.75 0 110 1.5h-1.5a.75.75 0 01-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
