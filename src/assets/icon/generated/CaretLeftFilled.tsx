import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretLeftFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.75 4.5v15a.75.75 0 01-1.28.53l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.28.53z"
        fill={fillColor}
      />
    </svg>
  )
}
