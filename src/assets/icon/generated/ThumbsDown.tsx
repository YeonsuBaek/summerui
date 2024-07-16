import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThumbsDown = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.483 14.719l-1.125-9a2.25 2.25 0 00-2.233-1.969H3a1.5 1.5 0 00-1.5 1.5v8.25A1.5 1.5 0 003 15h4.037l3.542 7.086a.75.75 0 00.671.414A3.75 3.75 0 0015 18.75v-1.5h5.25a2.25 2.25 0 002.233-2.531zM6.75 13.5H3V5.25h3.75v8.25zm14.063 1.996a.739.739 0 01-.563.254h-6a.75.75 0 00-.75.75v2.25a2.25 2.25 0 01-1.808 2.207L8.25 14.073V5.25h10.875a.75.75 0 01.744.656l1.125 9a.74.74 0 01-.181.59z"
        fill={fillColor}
      />
    </svg>
  )
}
