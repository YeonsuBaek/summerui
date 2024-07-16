import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Plus = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 12a.75.75 0 01-.75.75h-7.5v7.5a.75.75 0 11-1.5 0v-7.5h-7.5a.75.75 0 110-1.5h7.5v-7.5a.75.75 0 111.5 0v7.5h7.5A.75.75 0 0121 12z"
        fill={fillColor}
      />
    </svg>
  )
}
