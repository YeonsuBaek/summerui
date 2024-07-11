import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Prohibit = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zM20.25 12a8.209 8.209 0 01-1.913 5.276L6.724 5.662A8.25 8.25 0 0120.25 12zm-16.5 0a8.209 8.209 0 011.913-5.276l11.613 11.613A8.25 8.25 0 013.75 12z"
        fill={fillColor}
      />
    </svg>
  )
}
