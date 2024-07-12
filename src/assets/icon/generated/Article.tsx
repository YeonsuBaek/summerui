import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Article = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 3.75H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm0 15H3.75V5.25h16.5v13.5zm-3-9.75a.75.75 0 01-.75.75h-9a.75.75 0 010-1.5h9a.75.75 0 01.75.75zm0 3a.75.75 0 01-.75.75h-9a.75.75 0 110-1.5h9a.75.75 0 01.75.75zm0 3a.75.75 0 01-.75.75h-9a.75.75 0 110-1.5h9a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
