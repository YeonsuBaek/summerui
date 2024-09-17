import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CheckFatFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.81 8.523L10.773 20.56a1.5 1.5 0 01-2.12 0l-6.715-6.75a1.5 1.5 0 010-2.12l1.875-1.874a1.5 1.5 0 012.117 0l3.82 3.705 9.071-8.96a1.5 1.5 0 012.118 0l1.87 1.832a1.5 1.5 0 01.001 2.13z"
        fill={fillColor}
      />
    </svg>
  )
}
