import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ListHeartFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM9.75 17.25H6a.75.75 0 110-1.5h3.75a.75.75 0 110 1.5zM5.25 12a.75.75 0 01.75-.75h3a.75.75 0 110 1.5H6a.75.75 0 01-.75-.75zm9.918 5.398a.374.374 0 01-.336 0c-.146-.073-3.582-1.82-3.582-4.273A2.062 2.062 0 0115 11.94a2.062 2.062 0 013.75 1.185c0 2.453-3.436 4.2-3.582 4.273zM18 8.25H6a.75.75 0 010-1.5h12a.75.75 0 110 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
