import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowLeftFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 12a.75.75 0 01-.75.75h-9v6a.75.75 0 01-1.28.53l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.28.53v6h9A.75.75 0 0121 12z"
        fill={fillColor}
      />
    </svg>
  )
}
