import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const VideoFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 19.5a.75.75 0 01-.75.75H3a.75.75 0 110-1.5h18a.75.75 0 01.75.75zm0-14.25v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5zm-6.375 5.25a.749.749 0 00-.32-.614l-3.75-2.625a.75.75 0 00-1.18.614v5.25a.75.75 0 001.18.614l3.75-2.625a.75.75 0 00.32-.614z"
        fill={fillColor}
      />
    </svg>
  )
}
