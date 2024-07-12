import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareFive = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15zM11.136 8.25l-.393 2.357c.288-.072.585-.108.882-.107a3.375 3.375 0 010 6.75 3.333 3.333 0 01-2.41-.975.75.75 0 111.07-1.05 1.85 1.85 0 001.34.525 1.875 1.875 0 100-3.75 1.85 1.85 0 00-1.34.525.75.75 0 01-1.275-.649l.75-4.5a.75.75 0 01.74-.626h3.75a.75.75 0 110 1.5h-3.114z"
        fill={fillColor}
      />
    </svg>
  )
}
