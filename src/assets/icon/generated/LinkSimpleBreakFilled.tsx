import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LinkSimpleBreakFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-5.947 13.28l-2.011 2.012a4.126 4.126 0 01-5.834-5.834l2.011-2.011a.75.75 0 111.062 1.06l-2.012 2.012a2.625 2.625 0 003.712 3.712l2.011-2.012a.75.75 0 111.06 1.062zm4.739-4.738l-2.011 2.01a.75.75 0 01-1.062-1.06l2.012-2.01a2.625 2.625 0 00-3.712-3.713L11.507 8.78a.75.75 0 01-1.06-1.062l2.011-2.01a4.125 4.125 0 015.834 5.833z"
        fill={fillColor}
      />
    </svg>
  )
}
