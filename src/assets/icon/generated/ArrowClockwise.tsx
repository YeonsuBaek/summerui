import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowClockwise = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 5.25v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 110-1.5h2.569l-2.493-2.284-.024-.022a7.5 7.5 0 10-.156 10.76.75.75 0 111.031 1.09A8.947 8.947 0 0112 21h-.124a9 9 0 116.476-15.375L21 8.044V5.25a.75.75 0 111.5 0z"
        fill={fillColor}
      />
    </svg>
  )
}
