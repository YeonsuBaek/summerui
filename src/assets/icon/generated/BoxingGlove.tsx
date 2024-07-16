import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BoxingGlove = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.75 1.5h-4.5A5.256 5.256 0 006 6.75h-.75a3 3 0 00-3 3v2.737c0 .34.117.67.33.937a.773.773 0 00.057.065L6 16.813v3.437a1.5 1.5 0 001.5 1.5H18a1.5 1.5 0 001.5-1.5v-3.645l1.442-5.048c.038-.134.058-.273.058-.412V6.75a5.256 5.256 0 00-5.25-5.25zm3.75 9.645l-1.47 5.149a.734.734 0 00-.03.206v3.75H7.5V16.5a.75.75 0 00-.223-.533L3.75 12.48V9.75a1.5 1.5 0 011.5-1.5H6v1.5a.75.75 0 101.5 0v-3A3.75 3.75 0 0111.25 3h4.5a3.75 3.75 0 013.75 3.75v4.395zm-3.414 4.526l-1.659.829 1.659.829a.751.751 0 01-.672 1.342l-2.664-1.333-2.664 1.333a.75.75 0 11-.672-1.342l1.659-.829-1.659-.829a.75.75 0 01.672-1.342l2.664 1.333 2.664-1.333a.752.752 0 01.672 1.342z"
        fill={fillColor}
      />
    </svg>
  )
}
