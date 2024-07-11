import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberZero = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.18 5.925C15.96 4.012 14.17 3 12 3S8.04 4.012 6.82 5.925C5.812 7.517 5.25 9.675 5.25 12c0 2.326.563 4.483 1.57 6.075C8.04 19.988 9.83 21 12 21s3.96-1.012 5.18-2.925c1.012-1.594 1.57-3.75 1.57-6.075s-.558-4.483-1.57-6.075zM12 19.5c-3.626 0-5.25-3.767-5.25-7.5S8.374 4.5 12 4.5s5.25 3.767 5.25 7.5-1.624 7.5-5.25 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
