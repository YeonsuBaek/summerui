import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const InfoFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M11.75 2.25A9.75 9.75 0 1021.5 12a9.76 9.76 0 00-9.75-9.75zm-.375 4.5a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm1.125 10.5a1.5 1.5 0 01-1.5-1.5V12a.75.75 0 110-1.5 1.5 1.5 0 011.5 1.5v3.75a.75.75 0 110 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
