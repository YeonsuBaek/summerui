import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThermometerSimpleFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15 13.695V3.75a3 3 0 00-6 0v9.945a5.25 5.25 0 106 0zM12 2.25a1.5 1.5 0 011.5 1.5v6h-3v-6a1.5 1.5 0 011.5-1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
