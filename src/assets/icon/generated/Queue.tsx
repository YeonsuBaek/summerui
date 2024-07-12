import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Queue = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 110 1.5H3.75A.75.75 0 013 6zm9.75 5.25h-9a.75.75 0 100 1.5h9a.75.75 0 100-1.5zm0 6h-9a.75.75 0 100 1.5h9a.75.75 0 100-1.5zM23.25 15a.75.75 0 01-.352.636l-6 3.75a.75.75 0 01-1.148-.636v-7.5a.751.751 0 011.148-.636l6 3.75a.75.75 0 01.352.636zm-2.165 0l-3.835-2.397v4.794L21.085 15z"
        fill={fillColor}
      />
    </svg>
  )
}
