import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatCircleSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M5.055 3.246a.75.75 0 10-1.11 1.008l.96 1.058a9.756 9.756 0 00-1.513 11.27l-1.064 3.193a1.5 1.5 0 001.897 1.897l3.192-1.064a9.75 9.75 0 0010.566-.912l.962 1.058a.75.75 0 101.11-1.008l-15-16.5zM12 20.25a8.237 8.237 0 01-4.13-1.107.751.751 0 00-.614-.062L3.75 20.25l1.17-3.506a.75.75 0 00-.063-.613A8.25 8.25 0 015.92 6.426l11.05 12.158A8.229 8.229 0 0112 20.25zM21.75 12a9.764 9.764 0 01-1.16 4.617.75.75 0 01-1.322-.71A8.25 8.25 0 008.801 4.393.75.75 0 018.22 3.01 9.756 9.756 0 0121.75 12z"
        fill={fillColor}
      />
    </svg>
  )
}
