import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThermometerFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.875 5.25a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25zm0 3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm-5.625 4.695V3.75a3 3 0 00-6 0v9.945a5.25 5.25 0 106 0zm-1.5-3.945h-3v-6a1.5 1.5 0 013 0v6z"
        fill={fillColor}
      />
    </svg>
  )
}
