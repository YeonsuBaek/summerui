import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsLeftRightFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M3.97 8.03a.75.75 0 010-1.06l3-3a.75.75 0 011.28.53v2.25H19.5a.75.75 0 110 1.5H8.25v2.25a.75.75 0 01-1.28.53l-3-3zm16.06 7.94l-3-3a.75.75 0 00-1.28.53v2.25H4.5a.75.75 0 100 1.5h11.25v2.25a.75.75 0 001.28.53l3-3a.747.747 0 000-1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
