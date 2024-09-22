import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChalkboardTeacherFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 3.75H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h1.255a.75.75 0 00.678-.428 4.5 4.5 0 018.134 0 .75.75 0 00.678.428h5.755a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm-10.5 12a3 3 0 110-6 3 3 0 010 6zm10.5 3h-5.303a5.993 5.993 0 00-1.234-1.5H18a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v9a.75.75 0 00.563.727c-.502.434-.927.949-1.26 1.523H3.75V5.25h16.5v13.5z"
        fill={fillColor}
      />
    </svg>
  )
}
