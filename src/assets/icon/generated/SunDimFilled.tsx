import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SunDimFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M11.25 3.75V3a.75.75 0 111.5 0v.75a.75.75 0 11-1.5 0zM12 6a6 6 0 106 6 6.006 6.006 0 00-6-6zm-6.53.53a.75.75 0 101.06-1.06l-.75-.75a.75.75 0 10-1.06 1.06l.75.75zm0 10.94l-.75.75a.75.75 0 101.06 1.06l.75-.75a.751.751 0 00-1.06-1.06zM18 6.75a.75.75 0 00.53-.22l.75-.75a.75.75 0 10-1.06-1.06l-.75.75A.75.75 0 0018 6.75zm.53 10.72a.75.75 0 10-1.06 1.06l.75.75a.75.75 0 101.06-1.06l-.75-.75zM3.75 11.25H3a.75.75 0 100 1.5h.75a.75.75 0 100-1.5zM12 19.5a.75.75 0 00-.75.75V21a.75.75 0 101.5 0v-.75a.75.75 0 00-.75-.75zm9-8.25h-.75a.75.75 0 100 1.5H21a.75.75 0 100-1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
