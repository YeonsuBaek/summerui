import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SearchMinusFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.53 20.47l-4.693-4.694a8.27 8.27 0 10-1.06 1.06l4.692 4.695a.75.75 0 101.062-1.062zm-8.03-9.22h-6a.75.75 0 110-1.5h6a.75.75 0 110 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
