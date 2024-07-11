import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Tag = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.81 12.75L13.5 3.44A1.487 1.487 0 0012.44 3H3.75a.75.75 0 00-.75.75v8.69a1.486 1.486 0 00.44 1.06l9.31 9.31a1.5 1.5 0 002.122 0l7.938-7.938a1.5 1.5 0 000-2.122zm-9 9L4.5 12.44V4.5h7.94l9.31 9.31-7.94 7.94zM9 7.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
