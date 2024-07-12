import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudSnow = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M8.25 18.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm2.625.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm4.5-1.5a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm-9 3.75a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm8.25 0a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM21.75 8.625a7.133 7.133 0 01-7.125 7.125h-7.5a4.875 4.875 0 11.836-9.679A7.132 7.132 0 0121.75 8.625zm-1.5 0A5.63 5.63 0 009 8.293a.751.751 0 11-1.5-.086c.013-.229.037-.455.072-.678a3.375 3.375 0 10-.447 6.72h7.5a5.632 5.632 0 005.625-5.624z"
        fill={fillColor}
      />
    </svg>
  )
}
