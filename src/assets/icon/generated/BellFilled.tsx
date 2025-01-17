import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BellFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.794 16.494c-.52-.896-1.294-3.432-1.294-6.744a7.5 7.5 0 00-15 0c0 3.313-.774 5.848-1.295 6.744A1.5 1.5 0 004.5 18.75h3.826a3.75 3.75 0 007.348 0H19.5a1.5 1.5 0 001.294-2.256zM12 20.25a2.25 2.25 0 01-2.12-1.5h4.24a2.25 2.25 0 01-2.12 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
