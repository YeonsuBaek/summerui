import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CalendarDot = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-2.25v-.75a.75.75 0 10-1.5 0V3h-7.5v-.75a.75.75 0 00-1.5 0V3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM6.75 4.5v.75a.75.75 0 001.5 0V4.5h7.5v.75a.75.75 0 101.5 0V4.5h2.25v3h-15v-3h2.25zm12.75 15h-15V9h15v10.5zm-6-5.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={fillColor}
      />
    </svg>
  )
}
