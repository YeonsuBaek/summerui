import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HourglassFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.81 18.44A1.5 1.5 0 0118.75 21H5.25a1.5 1.5 0 01-1.05-2.573L10.916 12 4.202 5.572A1.5 1.5 0 015.25 3h13.5a1.5 1.5 0 011.05 2.572L13.084 12l6.713 6.427a.14.14 0 00.012.013z"
        fill={fillColor}
      />
    </svg>
  )
}
