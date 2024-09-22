import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowFatDownFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.53 13.28l-9 9a.747.747 0 01-1.06 0l-9-9A.75.75 0 013 12h3.75V4.5A1.5 1.5 0 018.25 3h7.5a1.5 1.5 0 011.5 1.5V12H21a.75.75 0 01.53 1.28z"
        fill={fillColor}
      />
    </svg>
  )
}
