import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const EyeClosedFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.65 15.375a.751.751 0 11-1.302.75l-1.78-3.113a11.554 11.554 0 01-3.38 1.562l.55 3.302a.75.75 0 11-1.477.247l-.54-3.242a12.47 12.47 0 01-3.44 0l-.54 3.242a.75.75 0 11-1.482-.247l.553-3.302a11.554 11.554 0 01-3.38-1.564l-1.776 3.115a.753.753 0 11-1.307-.75l1.875-3.281a14.333 14.333 0 01-1.809-1.875.75.75 0 010-.943C4.178 7.099 7.27 4.5 12 4.5s7.823 2.599 9.583 4.781a.75.75 0 010 .943 14.334 14.334 0 01-1.81 1.875l1.878 3.276z"
        fill={fillColor}
      />
    </svg>
  )
}
