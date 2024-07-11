import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HourglassLow = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.75 7.091V3.75a1.5 1.5 0 00-1.5-1.5H6.75a1.5 1.5 0 00-1.5 1.5v3.375a1.507 1.507 0 00.6 1.2L10.75 12l-4.9 3.675a1.507 1.507 0 00-.6 1.2v3.375a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-3.341a1.506 1.506 0 00-.595-1.196L13.245 12l4.91-3.713a1.506 1.506 0 00.595-1.196zM16.71 16.5H7.25L12 12.937l4.71 3.563zm-9.96 3.75V18h10.5v2.25H6.75zm10.5-13.159L12 11.062 6.75 7.126V3.75h10.5v3.341z"
        fill={fillColor}
      />
    </svg>
  )
}
