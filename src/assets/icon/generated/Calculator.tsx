import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Calculator = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M7.5 11.25h9a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75zm.75-4.5h7.5v3h-7.5v-3zm10.5-4.5H5.25a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zm0 18H5.25V3.75h13.5v16.5zm-9.375-6.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm3.75 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm3.75 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm-7.5 3.75a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm3.75 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm3.75 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
