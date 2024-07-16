import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Cactus = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 19.5h-4.5v-2.25h.375a6.381 6.381 0 006.375-6.375 2.625 2.625 0 00-5.25 0A1.125 1.125 0 0116.125 12h-.375V5.25a3.75 3.75 0 00-7.5 0v3h-.375A1.125 1.125 0 016.75 7.125a2.625 2.625 0 00-5.25 0A6.382 6.382 0 007.875 13.5h.375v6h-4.5a.75.75 0 100 1.5h16.5a.75.75 0 100-1.5zM9 12H7.875A4.88 4.88 0 013 7.125a1.125 1.125 0 012.25 0A2.625 2.625 0 007.875 9.75H9A.75.75 0 009.75 9V5.25a2.25 2.25 0 114.5 0v7.5a.75.75 0 00.75.75h1.125a2.625 2.625 0 002.625-2.625 1.125 1.125 0 112.25 0 4.88 4.88 0 01-4.875 4.875H15a.75.75 0 00-.75.75v3h-4.5v-6.75A.75.75 0 009 12z"
        fill={fillColor}
      />
    </svg>
  )
}
