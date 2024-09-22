import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChalkboardFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 18h-.75V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5V18H1.5a.75.75 0 100 1.5h21a.75.75 0 100-1.5zm-2.25 0H13.5v-1.5a.75.75 0 01.75-.75h5.25a.75.75 0 01.75.75V18z"
        fill={fillColor}
      />
    </svg>
  )
}
