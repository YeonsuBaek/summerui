import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowDown = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.28 14.03l-6.75 6.75a.748.748 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V3.75a.75.75 0 111.5 0v14.69l5.47-5.47a.75.75 0 111.06 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
