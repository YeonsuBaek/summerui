import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PlayPause = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.25 6v12a.75.75 0 11-1.5 0V6a.75.75 0 111.5 0zM21 5.25a.75.75 0 00-.75.75v12a.75.75 0 101.5 0V6a.75.75 0 00-.75-.75zM13.5 12a1.477 1.477 0 01-.687 1.25l-8.268 5.265a1.493 1.493 0 01-2.295-1.25V6.734a1.491 1.491 0 012.295-1.25l8.268 5.264A1.477 1.477 0 0113.5 12zm-1.517 0L3.75 6.758v10.485L11.983 12z"
        fill={fillColor}
      />
    </svg>
  )
}
