import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Bookmark = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.25 3H6.75a1.5 1.5 0 00-1.5 1.5V21a.75.75 0 001.147.636L12 18.134l5.603 3.502A.75.75 0 0018.75 21V4.5a1.5 1.5 0 00-1.5-1.5zm0 16.647l-4.853-3.033a.75.75 0 00-.795 0L6.75 19.647V4.5h10.5v15.147z"
        fill={fillColor}
      />
    </svg>
  )
}
