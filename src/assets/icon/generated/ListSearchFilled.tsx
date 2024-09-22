import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ListSearchFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 110 1.5H3.75A.75.75 0 013 6zm.75 6.75h6.75a.75.75 0 100-1.5H3.75a.75.75 0 100 1.5zm8.25 4.5H3.75a.75.75 0 100 1.5H12a.75.75 0 100-1.5zm10.28.22l-1.902-1.907a3.75 3.75 0 10-1.066 1.065l1.904 1.903a.75.75 0 101.06-1.062h.005z"
        fill={fillColor}
      />
    </svg>
  )
}
