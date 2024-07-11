import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ToggleLeft = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.5 5.25h-9a6.75 6.75 0 000 13.5h9a6.75 6.75 0 000-13.5zm0 12h-9a5.25 5.25 0 110-10.5h9a5.25 5.25 0 010 10.5zm-9-9a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
