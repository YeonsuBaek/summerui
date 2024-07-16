import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PushPinSimpleSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M7.805 3.75a.75.75 0 01.75-.75H18a.75.75 0 110 1.5h-.606l1.758 9.966a.75.75 0 01-1.476.26L15.87 4.5H8.558a.75.75 0 01-.753-.75zm12.2 17.055a.75.75 0 01-1.06-.05l-3.186-3.505H12.75v5.25a.75.75 0 11-1.5 0v-5.25h-7.5a.75.75 0 110-1.5h.87l1.59-9-2.265-2.496a.75.75 0 111.11-1.008l15 16.5a.75.75 0 01-.05 1.059zm-5.61-5.055l-6.91-7.601-1.34 7.601h8.25z"
        fill={fillColor}
      />
    </svg>
  )
}
