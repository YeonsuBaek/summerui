import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Archive = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 4.5H3A1.5 1.5 0 001.5 6v2.25A1.5 1.5 0 003 9.75V18a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 18V9.75a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0021 4.5zM19.5 18h-15V9.75h15V18zM21 8.25H3V6h18v2.25zm-12 4.5a.75.75 0 01.75-.75h4.5a.75.75 0 110 1.5h-4.5a.75.75 0 01-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
