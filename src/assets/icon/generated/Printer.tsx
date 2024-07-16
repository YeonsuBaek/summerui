import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Printer = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.125 6.75H18.75v-3A.75.75 0 0018 3H6a.75.75 0 00-.75.75v3H3.875C2.565 6.75 1.5 7.76 1.5 9v7.5a.75.75 0 00.75.75h3v3A.75.75 0 006 21h12a.75.75 0 00.75-.75v-3h3a.75.75 0 00.75-.75V9c0-1.24-1.065-2.25-2.375-2.25zM6.75 4.5h10.5v2.25H6.75V4.5zm10.5 15H6.75V15h10.5v4.5zM21 15.75h-2.25v-1.5a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v1.5H3V9c0-.413.393-.75.875-.75h16.25c.482 0 .875.337.875.75v6.75zm-2.25-4.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
