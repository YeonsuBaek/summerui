import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Headphones = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.927 5.124a9.697 9.697 0 00-6.853-2.874H12A9.75 9.75 0 002.25 12v5.25A2.25 2.25 0 004.5 19.5H6a2.25 2.25 0 002.25-2.25V13.5A2.25 2.25 0 006 11.25H3.784A8.25 8.25 0 0112 3.75h.063a8.223 8.223 0 018.156 7.5H18a2.25 2.25 0 00-2.25 2.25v3.75A2.25 2.25 0 0018 19.5h1.5a2.25 2.25 0 002.25-2.25V12a9.694 9.694 0 00-2.823-6.876zM6 12.75a.75.75 0 01.75.75v3.75A.75.75 0 016 18H4.5a.75.75 0 01-.75-.75v-4.5H6zm14.25 4.5a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V13.5a.75.75 0 01.75-.75h2.25v4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
