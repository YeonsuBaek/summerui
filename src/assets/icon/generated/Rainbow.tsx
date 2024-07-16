import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Rainbow = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.25 15.75v1.5a.75.75 0 11-1.5 0v-1.5a3.75 3.75 0 00-7.5 0v1.5a.75.75 0 11-1.5 0v-1.5a5.25 5.25 0 0110.5 0zM12 7.5a8.26 8.26 0 00-8.25 8.25v1.5a.75.75 0 101.5 0v-1.5a6.75 6.75 0 0113.5 0v1.5a.75.75 0 101.5 0v-1.5A8.26 8.26 0 0012 7.5zm0-3A11.262 11.262 0 00.75 15.75v1.5a.75.75 0 101.5 0v-1.5a9.75 9.75 0 1119.5 0v1.5a.75.75 0 101.5 0v-1.5A11.262 11.262 0 0012 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
