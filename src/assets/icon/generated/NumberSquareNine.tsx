import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareNine = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15zM13.687 7.202a3.375 3.375 0 10-1.515 6.292l-1.566 2.625a.75.75 0 00.83 1.116.75.75 0 00.46-.344l3.023-5.063.007-.009a3.377 3.377 0 00-1.239-4.617zm-.062 3.86a1.875 1.875 0 11-3.244-1.874 1.875 1.875 0 013.242 1.874h.002z"
        fill={fillColor}
      />
    </svg>
  )
}
