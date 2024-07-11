import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberOne = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M13.5 4.5v15a.75.75 0 11-1.5 0V5.825L9.386 7.393a.75.75 0 11-.772-1.286l3.75-2.25A.75.75 0 0113.5 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
