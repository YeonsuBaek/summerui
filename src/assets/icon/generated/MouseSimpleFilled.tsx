import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MouseSimpleFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M13.5 1.5h-3a6.007 6.007 0 00-6 6v9a6.006 6.006 0 006 6h3a6.006 6.006 0 006-6v-9a6.006 6.006 0 00-6-6zm-.75 9a.75.75 0 11-1.5 0V6a.75.75 0 111.5 0v4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
