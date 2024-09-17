import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const UserSquare = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM9 11.25a3 3 0 116 0 3 3 0 01-6 0zM6.438 19.5a6 6 0 0111.124 0H6.438zm13.062 0h-.344a7.489 7.489 0 00-4.376-4.715 4.5 4.5 0 10-5.56 0A7.49 7.49 0 004.844 19.5H4.5v-15h15v15z"
        fill={fillColor}
      />
    </svg>
  )
}
