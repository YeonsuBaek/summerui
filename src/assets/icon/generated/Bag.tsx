import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Bag = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 6H16.5a4.5 4.5 0 10-9 0H3.75a1.5 1.5 0 00-1.5 1.5v11.25a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5zM12 3a3 3 0 013 3H9a3 3 0 013-3zm8.25 15.75H3.75V7.5H7.5V9A.75.75 0 009 9V7.5h6V9a.75.75 0 101.5 0V7.5h3.75v11.25z"
        fill={fillColor}
      />
    </svg>
  )
}
