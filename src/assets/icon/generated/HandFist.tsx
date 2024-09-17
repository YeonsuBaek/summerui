import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HandFist = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18.75 7.5h-1.5V6A3 3 0 0012 4.02a3 3 0 00-5.23 1.644A3 3 0 002.25 8.25V12a9.75 9.75 0 1019.5 0v-1.5a3 3 0 00-3-3zm-4.5-3a1.5 1.5 0 011.5 1.5v1.5h-3V6a1.5 1.5 0 011.5-1.5zm-6 1.5a1.5 1.5 0 013 0v3.75a1.5 1.5 0 11-3 0V6zm-4.5 2.25a1.5 1.5 0 013 0v1.5a1.5 1.5 0 11-3 0v-1.5zM20.25 12a8.25 8.25 0 01-16.492.352A2.993 2.993 0 007.5 11.73a2.993 2.993 0 004.18.314c.27.447.65.817 1.106 1.072A4.49 4.49 0 0011.25 16.5a.75.75 0 101.5 0 3 3 0 013-3 .75.75 0 100-1.5h-1.5a1.5 1.5 0 01-1.5-1.5V9h6a1.5 1.5 0 011.5 1.5V12z"
        fill={fillColor}
      />
    </svg>
  )
}
