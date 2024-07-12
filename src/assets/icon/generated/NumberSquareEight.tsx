import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareEight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15zm-5.455-7.932a3 3 0 10-4.09 0 3.375 3.375 0 104.09 0zM10.5 9.375a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5 6.75a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z"
        fill={fillColor}
      />
    </svg>
  )
}
