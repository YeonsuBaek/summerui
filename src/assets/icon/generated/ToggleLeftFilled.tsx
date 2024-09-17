import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ToggleLeftFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.5 5.25h-9a6.75 6.75 0 000 13.5h9a6.75 6.75 0 000-13.5zm-9 10.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
