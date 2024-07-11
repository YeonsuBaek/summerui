import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Upload = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 13.5v6a.75.75 0 01-.75.75H3.75A.75.75 0 013 19.5v-6a.75.75 0 111.5 0v5.25h15V13.5a.75.75 0 111.5 0zM8.78 7.28l2.47-2.47v8.69a.75.75 0 101.5 0V4.81l2.47 2.47a.75.75 0 101.06-1.06l-3.75-3.75a.749.749 0 00-1.06 0L7.72 6.22a.75.75 0 001.06 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
