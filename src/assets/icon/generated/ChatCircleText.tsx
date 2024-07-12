import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatCircleText = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15.75 10.5a.75.75 0 01-.75.75H9a.75.75 0 110-1.5h6a.75.75 0 01.75.75zM15 12.75H9a.75.75 0 100 1.5h6a.75.75 0 100-1.5zm6.75-.75a9.75 9.75 0 01-14.332 8.608l-3.193 1.064a1.5 1.5 0 01-1.897-1.897l1.064-3.192A9.75 9.75 0 1121.75 12zm-1.5 0a8.25 8.25 0 10-15.393 4.13.75.75 0 01.062.614L3.75 20.25l3.506-1.17a.736.736 0 01.612.063A8.25 8.25 0 0020.25 12z"
        fill={fillColor}
      />
    </svg>
  )
}
