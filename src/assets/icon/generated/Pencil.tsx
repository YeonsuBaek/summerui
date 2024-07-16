import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Pencil = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.31 6.878l-4.188-4.19a1.5 1.5 0 00-2.122 0L3.44 14.25A1.487 1.487 0 003 15.31v4.19A1.5 1.5 0 004.5 21h4.19a1.487 1.487 0 001.06-.44L21.31 9a1.5 1.5 0 000-2.122zM8.69 19.5H4.5v-4.19l8.25-8.25 4.19 4.19-8.25 8.25zM18 10.189L13.81 6l2.25-2.25 4.19 4.189-2.25 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
