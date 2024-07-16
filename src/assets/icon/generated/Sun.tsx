import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Sun = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M11.25 3.75V1.5a.75.75 0 111.5 0v2.25a.75.75 0 11-1.5 0zM18 12a6 6 0 11-6-6 6.006 6.006 0 016 6zm-1.5 0a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zM5.47 6.53a.75.75 0 101.06-1.06l-1.5-1.5a.75.75 0 10-1.06 1.06l1.5 1.5zm0 10.94l-1.5 1.5a.75.75 0 101.06 1.06l1.5-1.5a.751.751 0 00-1.06-1.06zM18 6.75a.75.75 0 00.53-.22l1.5-1.5a.75.75 0 10-1.06-1.06l-1.5 1.5A.75.75 0 0018 6.75zm.53 10.72a.75.75 0 10-1.06 1.06l1.5 1.5a.75.75 0 101.06-1.06l-1.5-1.5zM4.5 12a.75.75 0 00-.75-.75H1.5a.75.75 0 100 1.5h2.25A.75.75 0 004.5 12zm7.5 7.5a.75.75 0 00-.75.75v2.25a.75.75 0 101.5 0v-2.25a.75.75 0 00-.75-.75zm10.5-8.25h-2.25a.75.75 0 100 1.5h2.25a.75.75 0 100-1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
