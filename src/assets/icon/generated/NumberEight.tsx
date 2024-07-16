import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberEight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.583 11.182a4.5 4.5 0 10-5.166 0 5.25 5.25 0 105.166 0zM9 7.5a3 3 0 116 0 3 3 0 01-6 0zm3 12a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
