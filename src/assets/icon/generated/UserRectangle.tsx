import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const UserRectangle = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={`${size / 16}rem`}
      height={`${size / 16}rem`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.25 3.75H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zM9 11.25a3 3 0 116 0 3 3 0 01-6 0zm-2.197 7.5a6 6 0 0110.394 0H6.803zm13.447 0h-1.375a7.513 7.513 0 00-4.096-3.964 4.5 4.5 0 10-5.558 0 7.513 7.513 0 00-4.096 3.964H3.75V5.25h16.5v13.5z"
        fill={fillColor}
      />
    </svg>
  )
}
