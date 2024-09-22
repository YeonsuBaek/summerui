import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Wheelchair = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.962 17.763a.75.75 0 00-.95-.475l-1.632.545-2.71-5.419A.751.751 0 0018 12h-7.5V9.75h5.25a.75.75 0 100-1.5H10.5v-.844a3 3 0 10-1.5 0V8.42a6.75 6.75 0 001.5 13.33c3.143 0 5.97-2.13 6.727-5.063a.75.75 0 00-1.454-.375c-.577 2.25-2.844 3.938-5.273 3.938A5.25 5.25 0 019 9.97v2.78a.75.75 0 00.75.75h7.786l2.793 5.586a.75.75 0 00.908.375l2.25-.75a.75.75 0 00.475-.948zM8.25 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill={fillColor}
      />
    </svg>
  )
}
