import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Train = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.25 2.25H6.75a3 3 0 00-3 3v12a3 3 0 003 3h.75l-1.35 1.8a.75.75 0 001.2.9l2.025-2.7h5.25l2.025 2.7a.75.75 0 001.2-.9l-1.35-1.8h.75a3 3 0 003-3v-12a3 3 0 00-3-3zm-10.5 1.5h10.5a1.5 1.5 0 011.5 1.5v6H5.25v-6a1.5 1.5 0 011.5-1.5zm10.5 15H6.75a1.5 1.5 0 01-1.5-1.5v-4.5h13.5v4.5a1.5 1.5 0 01-1.5 1.5zM9 16.125a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm8.25 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
