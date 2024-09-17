import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LinkSimpleHorizontalFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 4.5H3A1.5 1.5 0 001.5 6v12A1.5 1.5 0 003 19.5h18a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0021 4.5zM10.5 15.75h-3a3.75 3.75 0 010-7.5h3a.75.75 0 110 1.5h-3a2.25 2.25 0 100 4.5h3a.75.75 0 110 1.5zm4.5-4.5a.75.75 0 110 1.5H9a.75.75 0 110-1.5h6zm1.5 4.5h-3a.75.75 0 110-1.5h3a2.25 2.25 0 000-4.5h-3a.75.75 0 110-1.5h3a3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
