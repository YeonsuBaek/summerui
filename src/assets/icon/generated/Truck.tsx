import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Truck = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.946 10.969l-1.313-3.281a1.493 1.493 0 00-1.391-.938H18V6a.75.75 0 00-.75-.75H3a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h1.594a3 3 0 005.812 0h4.688a3 3 0 005.812 0H22.5a1.5 1.5 0 001.5-1.5v-6a.742.742 0 00-.054-.281zM18 8.25h3.242l.9 2.25H18V8.25zM3 6.75h13.5v6H3v-6zM7.5 19.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.594-2.25h-4.688a3 3 0 00-5.812 0H3v-3h13.5v1.154a3.008 3.008 0 00-1.406 1.846zM18 19.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5-2.25h-1.594A3.007 3.007 0 0018 15v-3h4.5v5.25z"
        fill={fillColor}
      />
    </svg>
  )
}
