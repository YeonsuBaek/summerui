import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Search = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.53 20.47l-4.693-4.694a8.26 8.26 0 10-1.06 1.06l4.692 4.695a.75.75 0 101.062-1.062zM3.75 10.5a6.75 6.75 0 116.75 6.75 6.758 6.758 0 01-6.75-6.75z"
        fill={fillColor}
      />
    </svg>
  )
}