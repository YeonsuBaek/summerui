import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LockSimpleOpen = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 7.5H9V5.25a3 3 0 013-3c1.44 0 2.738 1.031 3.015 2.4a.75.75 0 001.47-.3C16.061 2.265 14.175.75 12 .75a4.505 4.505 0 00-4.5 4.5V7.5h-3A1.5 1.5 0 003 9v10.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V9a1.5 1.5 0 00-1.5-1.5zm0 12h-15V9h15v10.5z"
        fill={fillColor}
      />
    </svg>
  )
}
