import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PushPinSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M5.055 3.246a.75.75 0 10-1.11 1.008l2.37 2.609a6.545 6.545 0 00-2.752 1.352 1.5 1.5 0 00-.121 2.23l4.527 4.528-4 3.996a.75.75 0 101.062 1.062l3.996-4 4.527 4.527a1.5 1.5 0 001.062.442h.106a1.493 1.493 0 001.09-.593 8.414 8.414 0 001.086-1.9l2.048 2.25a.75.75 0 101.11-1.01L5.055 3.246zm9.56 16.254L4.5 9.383c.96-.774 1.988-1.16 3.062-1.15l8.171 8.988c-.209.925-.71 1.738-1.117 2.279zm7.446-9.75l-4.185 4.2a.75.75 0 01-1.062-1.06L21 8.69 15.311 3l-3.864 3.877a.75.75 0 01-1.062-1.059l3.865-3.877a1.5 1.5 0 012.122 0l5.69 5.688a1.5 1.5 0 010 2.121z"
        fill={fillColor}
      />
    </svg>
  )
}
