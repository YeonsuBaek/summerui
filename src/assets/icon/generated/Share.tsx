import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Share = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.5 15a3.738 3.738 0 00-2.683 1.133l-4.322-2.777c.34-.872.34-1.84 0-2.712l4.322-2.777a3.75 3.75 0 10-.812-1.261L8.683 9.383a3.75 3.75 0 100 5.234l4.322 2.777A3.75 3.75 0 1016.5 15zm0-12a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM6 14.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM16.5 21a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
