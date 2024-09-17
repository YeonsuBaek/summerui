import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DotsThreeCircleVerticalFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 12A9.75 9.75 0 1012 21.75 9.762 9.762 0 0021.75 12zM10.875 7.875a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm0 4.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm0 4.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
