import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BaseballHelmet = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M8.25 12a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25zm0 3.75a1.124 1.124 0 110-2.249 1.124 1.124 0 010 2.249zm15-4.5h-2.278A9.75 9.75 0 001.5 12v2.25A6.757 6.757 0 008.25 21H12a6.757 6.757 0 006.75-6.75v-1.5h4.5a.75.75 0 100-1.5zm-6 3a5.256 5.256 0 01-4.73 5.224A6.738 6.738 0 0015 14.25v-1.5h2.25v1.5zm-3-3a.75.75 0 00-.75.75v2.25a5.25 5.25 0 11-10.5 0V12a8.25 8.25 0 0116.466-.75H14.25z"
        fill={fillColor}
      />
    </svg>
  )
}
