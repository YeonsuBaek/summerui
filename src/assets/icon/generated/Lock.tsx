import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Lock = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 7.5h-3V5.25a4.5 4.5 0 10-9 0V7.5h-3A1.5 1.5 0 003 9v10.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V9a1.5 1.5 0 00-1.5-1.5zM9 5.25a3 3 0 116 0V7.5H9V5.25zM19.5 19.5h-15V9h15v10.5zm-6.375-5.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
