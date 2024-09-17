import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MoonStarsFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 9a.75.75 0 01-.75.75h-1.5v1.5a.75.75 0 11-1.5 0v-1.5h-1.5a.75.75 0 110-1.5h1.5v-1.5a.75.75 0 111.5 0v1.5h1.5a.75.75 0 01.75.75zm-9-3.75h.75V6a.75.75 0 101.5 0v-.75h.75a.75.75 0 100-1.5h-.75V3a.75.75 0 10-1.5 0v.75h-.75a.75.75 0 100 1.5zm6.107 8.843a8.255 8.255 0 01-9.7-9.7.75.75 0 00-.994-.85 9 9 0 1011.543 11.544.75.75 0 00-.85-.994z"
        fill={fillColor}
      />
    </svg>
  )
}
