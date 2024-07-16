import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Hash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 14.25h-4.5v-4.5h4.5a.75.75 0 100-1.5h-4.5v-4.5a.75.75 0 10-1.5 0v4.5h-4.5v-4.5a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5h-4.5a.75.75 0 100 1.5h4.5v4.5a.75.75 0 101.5 0v-4.5h4.5v4.5a.75.75 0 101.5 0v-4.5h4.5a.75.75 0 100-1.5zm-10.5 0v-4.5h4.5v4.5h-4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
