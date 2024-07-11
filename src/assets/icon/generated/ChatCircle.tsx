import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatCircle = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25a9.75 9.75 0 00-8.608 14.332l-1.064 3.193a1.5 1.5 0 001.897 1.897l3.192-1.064A9.75 9.75 0 1012 2.25zm0 18a8.237 8.237 0 01-4.13-1.107.75.75 0 00-.614-.063L3.75 20.25l1.17-3.506a.75.75 0 00-.063-.613A8.25 8.25 0 1112 20.25z"
        fill={fillColor}
      />
    </svg>
  )
}
