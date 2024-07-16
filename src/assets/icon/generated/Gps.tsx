import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Gps = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 11.25h-2.285a8.262 8.262 0 00-7.465-7.465V1.5a.75.75 0 10-1.5 0v2.285a8.262 8.262 0 00-7.465 7.465H1.5a.75.75 0 100 1.5h2.285a8.262 8.262 0 007.465 7.465V22.5a.75.75 0 101.5 0v-2.285a8.262 8.262 0 007.465-7.465H22.5a.75.75 0 100-1.5zM12 18.75A6.75 6.75 0 1118.75 12 6.758 6.758 0 0112 18.75z"
        fill={fillColor}
      />
    </svg>
  )
}
