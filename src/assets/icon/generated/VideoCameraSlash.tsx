import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const VideoCameraSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.603 6.844a.75.75 0 00-.77.036L19.5 9.098V6.75a1.5 1.5 0 00-1.5-1.5h-7.4a.75.75 0 000 1.5H18v8.215a.75.75 0 101.5 0v-.059l3.334 2.223a.75.75 0 00.416.121.75.75 0 00.75-.75v-9a.75.75 0 00-.397-.656zM22.5 15.098l-3-2v-2.197l3-1.995v6.192zM5.055 3.246a.75.75 0 10-1.11 1.008l.905.996H3a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h14.122l1.823 2.004a.75.75 0 101.11-1.008l-15-16.5zM3 17.25V6.75h3.214l9.545 10.5H3z"
        fill={fillColor}
      />
    </svg>
  )
}
