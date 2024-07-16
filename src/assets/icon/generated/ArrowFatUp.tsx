import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowFatUp = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.53 10.72l-9-9a.749.749 0 00-1.06 0l-9 9A.75.75 0 003 12h3.75v7.5a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5V12H21a.75.75 0 00.53-1.28zm-5.03-.22a.75.75 0 00-.75.75v8.25h-7.5v-8.25a.75.75 0 00-.75-.75H4.81L12 3.31l7.19 7.19H16.5z"
        fill={fillColor}
      />
    </svg>
  )
}
