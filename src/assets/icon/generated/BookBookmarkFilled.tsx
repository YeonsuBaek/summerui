import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BookBookmarkFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 2.25H6.75a3 3 0 00-3 3V21a.75.75 0 00.75.75H18a.75.75 0 100-1.5H5.25a1.5 1.5 0 011.5-1.5H19.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75zm-2.25 9l-2.4-1.8a.375.375 0 00-.45 0l-2.4 1.8v-7.5h5.25v7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
