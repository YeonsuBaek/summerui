import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FastForward = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.313 10.75l-8.268-5.266a1.492 1.492 0 00-2.295 1.251v3.497L5.295 5.484A1.492 1.492 0 003 6.735v10.53a1.492 1.492 0 002.295 1.25l7.455-4.747v3.497a1.492 1.492 0 002.295 1.25l8.268-5.264a1.481 1.481 0 000-2.502zM4.5 17.243V6.757L12.733 12 4.5 17.244zm9.75 0V6.757L22.483 12l-8.233 5.244z"
        fill={fillColor}
      />
    </svg>
  )
}
