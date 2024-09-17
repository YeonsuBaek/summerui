import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CalendarFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-2.25v-.75a.75.75 0 10-1.5 0V3h-7.5v-.75a.75.75 0 00-1.5 0V3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-9 14.25a.75.75 0 11-1.5 0v-4.787l-.414.208a.75.75 0 01-.672-1.342l1.5-.75a.75.75 0 011.086.671v6zm5.25-.75a.75.75 0 110 1.5h-3a.75.75 0 01-.6-1.2l2.698-3.597a.75.75 0 10-1.248-.828.75.75 0 11-1.298-.75 2.25 2.25 0 113.744 2.48L14.25 16.5h1.5zM4.5 7.5v-3h2.25v.75a.75.75 0 001.5 0V4.5h7.5v.75a.75.75 0 101.5 0V4.5h2.25v3h-15z"
        fill={fillColor}
      />
    </svg>
  )
}
