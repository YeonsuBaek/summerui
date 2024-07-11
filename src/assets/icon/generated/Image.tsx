import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Image = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 3.75H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm0 1.5v9.633l-2.444-2.443a1.5 1.5 0 00-2.122 0l-1.875 1.875-4.125-4.125a1.5 1.5 0 00-2.12 0L3.75 14.003V5.25h16.5zM3.75 16.125l4.875-4.875 7.5 7.5H3.75v-2.625zm16.5 2.625h-2.003l-3.375-3.375 1.875-1.875 3.503 3.504v1.746zM13.5 9.375a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
