import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HourglassHighFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.798 18.427L13.085 12l6.713-6.428A1.5 1.5 0 0018.75 3H5.25a1.5 1.5 0 00-1.048 2.572L10.915 12l-6.713 6.427A1.5 1.5 0 005.25 21h13.5a1.5 1.5 0 001.048-2.573zM18.75 4.5L17.184 6H6.818L5.25 4.5h13.5zm-13.5 15L12 13.039l6.75 6.461H5.25z"
        fill={fillColor}
      />
    </svg>
  )
}
