import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DotsThreeHortizontal = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M13.125 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm5.25-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm-12.75 0a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
