import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BookOpen = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.75 4.5H15A3.75 3.75 0 0012 6a3.75 3.75 0 00-3-1.5H2.25a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75H9a2.25 2.25 0 012.25 2.25.75.75 0 101.5 0A2.25 2.25 0 0115 19.5h6.75a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75zM9 18H3V6h6a2.25 2.25 0 012.25 2.25v10.5A3.732 3.732 0 009 18zm12 0h-6a3.732 3.732 0 00-2.25.75V8.25A2.25 2.25 0 0115 6h6v12z"
        fill={fillColor}
      />
    </svg>
  )
}
