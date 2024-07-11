import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SkipBack = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.732 3.188a1.5 1.5 0 00-1.522.04L6 10.24V3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 101.5 0v-6.49l11.21 7.01a1.495 1.495 0 002.29-1.259V4.49a1.487 1.487 0 00-.768-1.301zM18 19.5L6.015 12 18 4.507V19.5z"
        fill={fillColor}
      />
    </svg>
  )
}
