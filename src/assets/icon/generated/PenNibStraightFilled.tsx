import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PenNibStraightFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.843 11.615a.394.394 0 00-.017-.036L18 6.554V3a1.5 1.5 0 00-1.5-1.5h-9A1.5 1.5 0 006 3v3.553L3.174 11.58l-.018.036a1.494 1.494 0 00.136 1.553l.01.013 7.277 9.451a.375.375 0 00.671-.226v-7.91a2.25 2.25 0 111.5 0v7.91a.374.374 0 00.671.229l7.275-9.45.01-.014a1.493 1.493 0 00.137-1.556zM16.5 6h-9V3h9v3z"
        fill={fillColor}
      />
    </svg>
  )
}
