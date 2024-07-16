import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaperclipHorizontal = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.25 12A5.256 5.256 0 0118 17.25H4.5a3.75 3.75 0 010-7.5H18a2.25 2.25 0 010 4.5H7.5a.75.75 0 110-1.5H18a.75.75 0 100-1.5H4.5a2.25 2.25 0 000 4.5H18a3.75 3.75 0 100-7.5H7.5a.75.75 0 010-1.5H18A5.256 5.256 0 0123.25 12z"
        fill={fillColor}
      />
    </svg>
  )
}
