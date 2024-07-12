import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Download = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 13.5v6a.75.75 0 01-.75.75H3.75A.75.75 0 013 19.5v-6a.75.75 0 111.5 0v5.25h15V13.5a.75.75 0 111.5 0zm-9.53.53a.747.747 0 001.06 0l3.75-3.75a.75.75 0 10-1.06-1.06l-2.47 2.47V3a.75.75 0 10-1.5 0v8.69L8.78 9.22a.75.75 0 00-1.06 1.06l3.75 3.75z"
        fill={fillColor}
      />
    </svg>
  )
}
