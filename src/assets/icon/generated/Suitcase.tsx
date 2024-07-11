import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Suitcase = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 5.25H16.5V4.5a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 4.5v.75H3.75a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5zM9 4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v.75H9V4.5zm6 2.25v12H9v-12h6zm-11.25 0H7.5v12H3.75v-12zm16.5 12H16.5v-12h3.75v12z"
        fill={fillColor}
      />
    </svg>
  )
}
