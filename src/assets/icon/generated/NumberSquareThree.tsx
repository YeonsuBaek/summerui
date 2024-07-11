import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareThree = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15zM15 13.875a3.375 3.375 0 01-5.785 2.362.75.75 0 111.07-1.05A1.875 1.875 0 1011.625 12a.75.75 0 01-.614-1.18l1.798-2.57H9.75a.75.75 0 010-1.5h4.5a.75.75 0 01.614 1.18l-1.969 2.813A3.382 3.382 0 0115 13.875z"
        fill={fillColor}
      />
    </svg>
  )
}
