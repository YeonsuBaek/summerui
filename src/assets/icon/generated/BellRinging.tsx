import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BellRinging = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 6.666a.75.75 0 01-1.01-.321 8.825 8.825 0 00-3.137-3.46.75.75 0 11.8-1.27 10.45 10.45 0 013.668 4.04.75.75 0 01-.321 1.01zM3.348 6.75a.75.75 0 00.665-.405 8.825 8.825 0 013.137-3.46.75.75 0 10-.8-1.27 10.45 10.45 0 00-3.668 4.04.75.75 0 00.666 1.095zm17.447 9.744A1.5 1.5 0 0119.5 18.75h-3.825a3.75 3.75 0 01-7.35 0H4.5a1.5 1.5 0 01-1.293-2.256C4.052 15.037 4.5 12.964 4.5 10.5a7.5 7.5 0 1115 0c0 2.463.448 4.536 1.295 5.994zM14.12 18.75H9.879a2.25 2.25 0 004.242 0zm5.379-1.5c-.997-1.713-1.5-3.983-1.5-6.75a6 6 0 00-12 0c0 2.768-.504 5.038-1.5 6.75h15z"
        fill={fillColor}
      />
    </svg>
  )
}