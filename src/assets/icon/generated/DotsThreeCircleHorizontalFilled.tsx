import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DotsThreeCircleHorizontalFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.762 9.762 0 0012 2.25zM7.875 13.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm4.125 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm4.125 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
