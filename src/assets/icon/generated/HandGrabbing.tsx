import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HandGrabbing = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.875 5.5c-.438 0-.868.11-1.253.32a2.626 2.626 0 00-4.372-1.032 2.625 2.625 0 00-4.5 1.837V8.5H6.625A2.625 2.625 0 004 11.125v1.125a8.25 8.25 0 0016.5 0V8.125A2.625 2.625 0 0017.875 5.5zM19 12.25a6.75 6.75 0 01-13.5 0v-1.125A1.125 1.125 0 016.625 10H7.75v2.25a.75.75 0 101.5 0V6.625a1.125 1.125 0 012.25 0V9.25a.75.75 0 101.5 0V6.625a1.125 1.125 0 112.25 0V9.25a.75.75 0 101.5 0V8.125a1.125 1.125 0 112.25 0v4.125z"
        fill={fillColor}
      />
    </svg>
  )
}
