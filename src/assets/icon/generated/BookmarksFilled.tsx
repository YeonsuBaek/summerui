import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BookmarksFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18 2.25H9a1.5 1.5 0 00-1.5 1.5v1.5H6a1.5 1.5 0 00-1.5 1.5V21a.75.75 0 001.186.61l4.814-3.438 4.815 3.438A.75.75 0 0016.5 21v-3.685l1.814 1.295A.749.749 0 0019.5 18V3.75a1.5 1.5 0 00-1.5-1.5zm0 14.293l-1.5-1.074V6.75a1.5 1.5 0 00-1.5-1.5H9v-1.5h9v12.793z"
        fill={fillColor}
      />
    </svg>
  )
}
