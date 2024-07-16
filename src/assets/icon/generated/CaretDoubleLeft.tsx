import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretDoubleLeft = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.28 18.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L12.31 12l6.97 6.97zM4.81 12l6.97-6.97a.75.75 0 10-1.06-1.06l-7.5 7.5a.749.749 0 000 1.06l7.5 7.5a.75.75 0 101.06-1.06L4.81 12z"
        fill={fillColor}
      />
    </svg>
  )
}
