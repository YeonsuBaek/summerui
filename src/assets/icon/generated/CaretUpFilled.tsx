import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretUpFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.193 15.287a.75.75 0 01-.693.463h-15a.75.75 0 01-.53-1.28l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.749.749 0 01.163.817z"
        fill={fillColor}
      />
    </svg>
  )
}
