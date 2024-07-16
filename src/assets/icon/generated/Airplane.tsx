import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Airplane = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.086 12.079L15 8.537V4.5a3 3 0 00-6 0v4.037l-7.086 3.542a.75.75 0 00-.414.671v3a.75.75 0 00.897.735L9 15.165v1.775l-1.28 1.28a.75.75 0 00-.22.53v3a.75.75 0 001.031.697L12 21.058l3.469 1.389a.75.75 0 001.031-.697v-3a.75.75 0 00-.22-.53L15 16.94v-1.775l6.603 1.32a.75.75 0 00.897-.735v-3a.75.75 0 00-.414-.671zM21 14.835l-6.603-1.32a.75.75 0 00-.897.735v3a.75.75 0 00.22.53L15 19.06v1.582l-2.719-1.089a.75.75 0 00-.557 0L9 20.642V19.06l1.28-1.28a.748.748 0 00.22-.53v-3a.75.75 0 00-.897-.735L3 14.835v-1.622l7.086-3.542A.75.75 0 0010.5 9V4.5a1.5 1.5 0 113 0V9a.75.75 0 00.414.671L21 13.213v1.622z"
        fill={fillColor}
      />
    </svg>
  )
}
