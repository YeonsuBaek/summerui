import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HourglassLowFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.798 18.427L13.085 12l6.713-6.428A1.5 1.5 0 0018.75 3H5.25a1.5 1.5 0 00-1.048 2.572L10.915 12l-6.713 6.427A1.5 1.5 0 005.25 21h13.5a1.5 1.5 0 001.048-2.573zm-4.966-2.677H9.168L12 13.039l2.832 2.711zM18.75 4.5L12 10.961 5.25 4.5h13.5z"
        fill={fillColor}
      />
    </svg>
  )
}
