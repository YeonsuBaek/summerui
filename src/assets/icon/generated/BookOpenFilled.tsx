import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BookOpenFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 5.25v13.5a.75.75 0 01-.75.75H15a2.25 2.25 0 00-2.25 2.244.74.74 0 01-.48.708.75.75 0 01-1.02-.702A2.25 2.25 0 009 19.5H2.25a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75h6a3 3 0 013 3v8.225a.766.766 0 00.7.773.75.75 0 00.8-.75V7.5a3 3 0 013-3h6a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
