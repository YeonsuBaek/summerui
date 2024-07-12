import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberFour = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.25 15h-1.5V4.5a.75.75 0 00-1.336-.469l-9 11.25A.75.75 0 006 16.501h8.25v3a.75.75 0 101.5 0v-3h1.5a.75.75 0 100-1.5zm-3 0H7.56l6.69-8.361V15z"
        fill={fillColor}
      />
    </svg>
  )
}
