import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DotsThreeCircleHorizontal = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zM13.125 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm4.125 0A1.125 1.125 0 1115 12a1.125 1.125 0 012.25 0zM9 12a1.125 1.125 0 11-2.25 0A1.125 1.125 0 019 12z"
        fill={fillColor}
      />
    </svg>
  )
}
