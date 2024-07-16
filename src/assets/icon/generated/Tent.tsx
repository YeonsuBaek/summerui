import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Tent = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.935 17.695l-6-13.5a.75.75 0 00-.685-.445H6.75a.75.75 0 00-.682.445v.012L.065 17.695A.75.75 0 00.75 18.75h22.5a.75.75 0 00.685-1.055zM6 17.25H1.904L6 8.034v9.216zm1.5 0V8.034l4.096 9.216H7.5zm5.738 0l-5.334-12h8.858l5.334 12h-8.858z"
        fill={fillColor}
      />
    </svg>
  )
}
