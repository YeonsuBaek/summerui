import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TennisBall = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.897 5.106a9.75 9.75 0 100 13.788 9.695 9.695 0 000-13.788zM6.164 6.166a8.215 8.215 0 015.03-2.373 8.185 8.185 0 01-2.381 5.025 8.196 8.196 0 01-5.027 2.377 8.21 8.21 0 012.378-5.03zM3.781 12.7a9.683 9.683 0 006.094-2.823 9.679 9.679 0 002.824-6.093 8.23 8.23 0 017.517 7.513 9.75 9.75 0 00-8.921 8.915A8.23 8.23 0 013.778 12.7l.003.001zm14.055 5.133a8.22 8.22 0 01-5.03 2.373 8.25 8.25 0 017.406-7.402 8.211 8.211 0 01-2.376 5.03z"
        fill={fillColor}
      />
    </svg>
  )
}
