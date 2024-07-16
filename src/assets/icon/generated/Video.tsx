import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Video = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.416 9.876l-4.5-3A.75.75 0 009.75 7.5v6a.75.75 0 001.166.624l4.5-3a.75.75 0 000-1.248zm-4.166 2.222V8.906l2.398 1.594-2.398 1.598zm9-8.348H3.75a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm0 12H3.75V5.25h16.5v10.5zm1.5 3.75a.75.75 0 01-.75.75H3a.75.75 0 110-1.5h18a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
