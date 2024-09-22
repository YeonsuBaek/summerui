import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const HandPalm = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.625 8.25c-.39 0-.774.086-1.125.254V5.625a2.624 2.624 0 00-3.877-2.306 2.625 2.625 0 00-5.123.806v.63a2.625 2.625 0 00-3.75 2.37v7.125a8.25 8.25 0 0016.5 0v-3.375a2.625 2.625 0 00-2.625-2.625zm1.125 6a6.75 6.75 0 01-13.5 0V7.125a1.125 1.125 0 012.25 0v4.125a.75.75 0 001.5 0V4.125a1.125 1.125 0 012.25 0V10.5a.75.75 0 001.5 0V5.625a1.125 1.125 0 112.25 0v6.438a4.507 4.507 0 00-3.75 4.437.75.75 0 001.5 0 3 3 0 013-3 .75.75 0 00.75-.75v-1.875a1.125 1.125 0 112.25 0v3.375z"
        fill={fillColor}
      />
    </svg>
  )
}
