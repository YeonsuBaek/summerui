import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowFatLeftFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 8.25v7.5a1.5 1.5 0 01-1.5 1.5H12V21a.75.75 0 01-1.28.53l-9-9a.749.749 0 010-1.06l9-9A.75.75 0 0112 3v3.75h7.5a1.5 1.5 0 011.5 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
