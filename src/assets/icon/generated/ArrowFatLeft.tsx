import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowFatLeft = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 6.75H12V3a.75.75 0 00-1.28-.53l-9 9a.75.75 0 000 1.06l9 9A.75.75 0 0012 21v-3.75h7.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5zm0 9h-8.25a.75.75 0 00-.75.75v2.69L3.31 12l7.19-7.19V7.5a.75.75 0 00.75.75h8.25v7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
