import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretRight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.03 12.53l-7.5 7.5a.75.75 0 11-1.06-1.06L15.44 12 8.47 5.03a.75.75 0 111.06-1.06l7.5 7.5a.747.747 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
