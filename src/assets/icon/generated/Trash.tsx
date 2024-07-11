import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Trash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 4.5H16.5v-.75a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 3.75v.75H3.75a.75.75 0 000 1.5h.75v13.5A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5V6h.75a.75.75 0 100-1.5zM9 3.75A.75.75 0 019.75 3h4.5a.75.75 0 01.75.75v.75H9v-.75zm9 15.75H6V6h12v13.5zm-7.5-9.75v6a.75.75 0 11-1.5 0v-6a.75.75 0 011.5 0zm4.5 0v6a.75.75 0 11-1.5 0v-6a.75.75 0 111.5 0z"
        fill={fillColor}
      />
    </svg>
  )
}
