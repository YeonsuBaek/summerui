import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MapPinSimpleArea = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11.25 9.675V16.5a.75.75 0 101.5 0V9.675a3.75 3.75 0 10-1.5 0zM12 3.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM22.5 16.5c0 2.923-5.41 4.5-10.5 4.5S1.5 19.423 1.5 16.5c0-.726.357-1.793 2.063-2.757 1.149-.65 2.73-1.15 4.572-1.446a.75.75 0 01.234 1.484c-1.644.265-3.094.716-4.07 1.27C3.472 15.517 3 16.045 3 16.5c0 1.253 3.424 3 9 3 5.576 0 9-1.747 9-3 0-.456-.473-.984-1.298-1.452-.981-.555-2.427-1.006-4.071-1.27a.75.75 0 11.238-1.48c1.842.294 3.423.794 4.572 1.445 1.702.964 2.059 2.031 2.059 2.757z"
        fill={fillColor}
      />
    </svg>
  )
}
