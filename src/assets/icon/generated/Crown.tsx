import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Crown = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.25 7.5a2.625 2.625 0 10-4.793 1.478l-2.511 3.094-2.258-5.19a2.625 2.625 0 10-3.381 0l-2.253 5.187-2.511-3.093A2.625 2.625 0 103.049 10.1l1.357 8.146a1.5 1.5 0 001.48 1.253h12.228a1.5 1.5 0 001.48-1.253l1.356-8.143a2.625 2.625 0 002.3-2.604zM12 3.75A1.125 1.125 0 1112 6a1.125 1.125 0 010-2.25zM2.25 7.5a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM18.114 18H5.886L4.58 10.174l3.087 3.795a.75.75 0 001.035.13.75.75 0 00.235-.3l2.747-6.319c.21.027.42.027.63 0l2.747 6.32a.749.749 0 001.27.169l3.087-3.799L18.114 18zm2.511-9.375a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
