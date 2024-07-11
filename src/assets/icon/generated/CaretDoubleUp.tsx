import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretDoubleUp = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.03 18.22a.75.75 0 11-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 11-1.06-1.06l7.5-7.5a.749.749 0 011.06 0l7.5 7.5zm-15-6.44L12 4.81l6.97 6.97a.75.75 0 101.06-1.06l-7.5-7.5a.75.75 0 00-1.06 0l-7.5 7.5a.75.75 0 101.06 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
