import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Mouse = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M13.5 1.5h-3a6.007 6.007 0 00-6 6v9a6.006 6.006 0 006 6h3a6.006 6.006 0 006-6v-9a6.006 6.006 0 00-6-6zm4.5 6v2.25h-5.25V3h.75A4.505 4.505 0 0118 7.5zM10.5 3h.75v6.75H6V7.5A4.505 4.505 0 0110.5 3zm3 18h-3A4.504 4.504 0 016 16.5v-5.25h12v5.25a4.504 4.504 0 01-4.5 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}