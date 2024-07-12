import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CalendarHeart = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-2.25v-.75a.75.75 0 10-1.5 0V3h-7.5v-.75a.75.75 0 00-1.5 0V3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h2.25v.75a.75.75 0 001.5 0V4.5h7.5v.75a.75.75 0 101.5 0V4.5h2.25v15zM14.25 8.25A2.992 2.992 0 0012 9.268a3 3 0 00-5.25 1.982c0 3.424 4.714 5.82 4.914 5.921a.75.75 0 00.672 0c.2-.101 4.914-2.497 4.914-5.921a3 3 0 00-3-3zM12 15.65c-1.293-.73-3.75-2.508-3.75-4.4a1.5 1.5 0 013 0 .75.75 0 101.5 0 1.5 1.5 0 113 0c0 1.893-2.457 3.67-3.75 4.4z"
        fill={fillColor}
      />
    </svg>
  )
}
