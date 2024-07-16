import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Bone = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.72 5.708a3.358 3.358 0 00-2.234-1.194 3.375 3.375 0 10-6.222 2.149v.007l-6.592 6.597h-.01a3.374 3.374 0 10-2.148 6.222 3.376 3.376 0 106.222-2.149v-.008l6.596-6.596h.009a3.375 3.375 0 004.382-5.028h-.004zm-1.18 3.4a1.875 1.875 0 01-2.406.357 1.5 1.5 0 00-1.864.205l-6.6 6.6a1.5 1.5 0 00-.201 1.864 1.875 1.875 0 11-3.446.703.75.75 0 00-.856-.857 1.875 1.875 0 11.699-3.449 1.5 1.5 0 001.864-.205l6.6-6.6a1.5 1.5 0 00.201-1.86 1.874 1.874 0 113.446-.703.75.75 0 00.856.857 1.875 1.875 0 011.704 3.093l.004-.004z"
        fill={fillColor}
      />
    </svg>
  )
}
