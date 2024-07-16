import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSeven = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.468 4.716l-4.5 15a.75.75 0 01-1.436-.432l4.21-14.034H8.25a.75.75 0 010-1.5h7.5a.75.75 0 01.718.966z"
        fill={fillColor}
      />
    </svg>
  )
}
