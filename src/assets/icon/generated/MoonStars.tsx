import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MoonStars = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.5 9a.75.75 0 01-.75.75h-1.5v1.5a.75.75 0 11-1.5 0v-1.5h-1.5a.75.75 0 110-1.5h1.5v-1.5a.75.75 0 111.5 0v1.5h1.5a.75.75 0 01.75.75zm-9-3.75h.75V6a.75.75 0 101.5 0v-.75h.75a.75.75 0 100-1.5h-.75V3a.75.75 0 10-1.5 0v.75h-.75a.75.75 0 100 1.5zm6.822 9.094a.749.749 0 01.134.75A9 9 0 118.913 3.544a.75.75 0 01.994.85 8.256 8.256 0 009.7 9.7.75.75 0 01.715.25zm-1.818 1.395A9.76 9.76 0 018.25 6c0-.168 0-.337.013-.504a7.5 7.5 0 1010.241 10.24v.003z"
        fill={fillColor}
      />
    </svg>
  )
}
