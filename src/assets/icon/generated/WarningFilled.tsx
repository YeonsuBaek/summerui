import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const WarningFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.701 17.384L13.503 3.146a2.322 2.322 0 00-4.004 0L1.301 17.384a2.204 2.204 0 000 2.223 2.282 2.282 0 002.002 1.143h16.396a2.284 2.284 0 002-1.143 2.205 2.205 0 00.002-2.223zM10.751 9.5a.75.75 0 111.5 0v3.75a.75.75 0 01-1.5 0V9.5zm.75 8.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
