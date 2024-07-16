import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const X = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.28 18.22a.75.75 0 11-1.06 1.06L12 13.06l-6.22 6.22a.75.75 0 01-1.06-1.06L10.94 12 4.72 5.78a.75.75 0 111.06-1.06L12 10.94l6.22-6.22a.75.75 0 111.06 1.06L13.06 12l6.22 6.22z"
        fill={fillColor}
      />
    </svg>
  )
}
