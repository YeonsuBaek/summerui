import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CalendarHeartFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-2.25v-.75a.75.75 0 10-1.5 0V3h-7.5v-.75a.75.75 0 00-1.5 0V3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM6.75 6v-.75a.75.75 0 011.5 0V6a.75.75 0 01-1.5 0zm7.74 9.663a13.454 13.454 0 01-2.322 1.548.374.374 0 01-.336 0 13.454 13.454 0 01-2.322-1.548c-1.582-1.32-2.385-2.678-2.385-4.038A2.625 2.625 0 0112 10.275a2.625 2.625 0 014.875 1.35c0 1.36-.802 2.719-2.385 4.038zM17.25 6a.75.75 0 11-1.5 0v-.75a.75.75 0 111.5 0V6z"
        fill={fillColor}
      />
    </svg>
  )
}
