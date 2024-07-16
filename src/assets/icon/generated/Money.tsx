import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Money = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm10.5-9h-21A.75.75 0 00.75 6v12a.75.75 0 00.75.75h21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75zm-4.345 12H5.845a5.324 5.324 0 00-3.595-3.595v-3.31A5.323 5.323 0 005.845 6.75h12.31a5.324 5.324 0 003.595 3.595v3.31a5.324 5.324 0 00-3.595 3.595zm3.595-8.497a3.826 3.826 0 01-2.003-2.003h2.003v2.003zM4.253 6.75A3.826 3.826 0 012.25 8.753V6.75h2.003zM2.25 15.247a3.826 3.826 0 012.003 2.003H2.25v-2.003zm17.497 2.003a3.826 3.826 0 012.003-2.003v2.003h-2.003z"
        fill={fillColor}
      />
    </svg>
  )
}
