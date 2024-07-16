import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CopySimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.25 6H3.75a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75zm-.75 13.5h-12v-12h12v12zM21 3.75v13.5a.75.75 0 11-1.5 0V4.5H6.75a.75.75 0 010-1.5h13.5a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
