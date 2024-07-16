import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleTwo = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm2.396-8.694L11.25 15.75h3a.75.75 0 110 1.5h-4.5a.75.75 0 01-.6-1.2l4.047-5.396a1.498 1.498 0 00-.488-2.221 1.5 1.5 0 00-2.124.815.75.75 0 01-1.414-.501 3 3 0 115.225 2.806v.003z"
        fill={fillColor}
      />
    </svg>
  )
}
