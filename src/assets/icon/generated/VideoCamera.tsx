import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const VideoCamera = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={`${size / 16}rem`}
      height={`${size / 16}rem`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M23.603 6.844a.75.75 0 00-.77.036L19.5 9.098V6.75a1.5 1.5 0 00-1.5-1.5H3a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-2.344l3.334 2.223a.75.75 0 00.416.121.75.75 0 00.75-.75v-9a.75.75 0 00-.397-.656zM18 17.25H3V6.75h15v10.5zm4.5-2.152l-3-2v-2.197l3-1.995v6.192z"
        fill={fillColor}
      />
    </svg>
  )
}
