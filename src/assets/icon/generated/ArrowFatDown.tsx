import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowFatDown = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.693 12.463A.75.75 0 0021 12h-3.75V4.5a1.5 1.5 0 00-1.5-1.5h-7.5a1.5 1.5 0 00-1.5 1.5V12H3a.75.75 0 00-.53 1.28l9 9a.747.747 0 001.06 0l9-9a.749.749 0 00.163-.817zM12 20.69L4.81 13.5H7.5a.75.75 0 00.75-.75V4.5h7.5v8.25a.75.75 0 00.75.75h2.69L12 20.69z"
        fill={fillColor}
      />
    </svg>
  )
}
