import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudLightning = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.625 1.5a7.144 7.144 0 00-6.664 4.571 4.875 4.875 0 10-.836 9.679h3.55l-1.568 2.614A.75.75 0 009.75 19.5h2.425l-1.568 2.614a.75.75 0 101.286.772l2.25-3.75A.75.75 0 0013.5 18h-2.425l1.35-2.25h2.2a7.125 7.125 0 000-14.25zm0 12.75h-7.5a3.375 3.375 0 11.448-6.72c-.035.222-.059.448-.072.677a.751.751 0 101.5.086 5.63 5.63 0 115.624 5.957z"
        fill={fillColor}
      />
    </svg>
  )
}
