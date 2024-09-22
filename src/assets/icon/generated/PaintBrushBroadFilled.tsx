import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaintBrushBroadFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={`${size / 16}rem`}
      height={`${size / 16}rem`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.25 2.25H6.75A3.75 3.75 0 003 6v6.75A2.25 2.25 0 005.25 15h4.5l-.74 4.375A.789.789 0 009 19.5a3 3 0 006 0 .789.789 0 00-.01-.125L14.25 15h4.5A2.25 2.25 0 0021 12.75V3a.75.75 0 00-.75-.75zm-13.5 1.5h9.75V7.5a.75.75 0 101.5 0V3.75h1.5v6.75h-15V6a2.25 2.25 0 012.25-2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
