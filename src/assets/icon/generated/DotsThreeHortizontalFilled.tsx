import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DotsThreeHortizontalFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.625 12a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0zM4.5 9.375a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25zm15 0a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25z"
        fill={fillColor}
      />
    </svg>
  )
}
