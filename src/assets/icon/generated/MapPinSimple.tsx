import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MapPinSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.25 6.75a5.25 5.25 0 10-6 5.196v9.804a.75.75 0 101.5 0v-9.804a5.258 5.258 0 004.5-5.196zM12 10.5A3.75 3.75 0 1112 3a3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
