import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SlidersHorizontal = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M3.75 8.25h3.094a3 3 0 005.812 0h7.594a.75.75 0 100-1.5h-7.594a3 3 0 00-5.812 0H3.75a.75.75 0 000 1.5zm6-2.25a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10.5 9.75h-1.594a3 3 0 00-5.812 0H3.75a.75.75 0 100 1.5h9.094a3 3 0 005.812 0h1.594a.75.75 0 100-1.5zM15.75 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill={fillColor}
      />
    </svg>
  )
}
