import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FlashFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M17.25 1.5H6.75A1.5 1.5 0 005.25 3v4.25c0 .324.106.64.3.9l1.95 2.6V21A1.5 1.5 0 009 22.5h6a1.5 1.5 0 001.5-1.5V10.75l1.95-2.6c.194-.26.3-.576.3-.9V3a1.5 1.5 0 00-1.5-1.5zm-4.5 12.75a.75.75 0 11-1.5 0v-3a.75.75 0 111.5 0v3zm-6-9V3h10.5v2.25H6.75z"
        fill={fillColor}
      />
    </svg>
  )
}
