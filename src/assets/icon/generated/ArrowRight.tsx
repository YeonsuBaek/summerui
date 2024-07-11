import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowRight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.78 12.53l-6.75 6.75a.75.75 0 01-1.06-1.06l5.47-5.47H3.75a.75.75 0 110-1.5h14.69l-5.47-5.47a.75.75 0 111.06-1.06l6.75 6.75a.747.747 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
