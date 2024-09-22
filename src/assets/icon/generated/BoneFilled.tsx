import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BoneFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.668 10.099a3.366 3.366 0 01-4.33.637.014.014 0 00-.01 0l-6.595 6.596v.008a3.375 3.375 0 11-6.223 2.149 3.373 3.373 0 01-2.028-5.731 3.377 3.377 0 014.177-.491.013.013 0 00.01 0l6.595-6.597v-.007a3.374 3.374 0 116.222-2.149 3.375 3.375 0 012.181 5.585z"
        fill={fillColor}
      />
    </svg>
  )
}
