import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const WatchFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.434 5.956l-.585-3.223A1.5 1.5 0 0014.374 1.5H9.626a1.5 1.5 0 00-1.475 1.233l-.585 3.223a7.49 7.49 0 000 12.088l.585 3.223A1.5 1.5 0 009.626 22.5h4.748a1.5 1.5 0 001.475-1.233l.585-3.223a7.492 7.492 0 000-12.088zM9.626 3h4.748l.366 2.02a7.477 7.477 0 00-5.48 0L9.626 3zm4.748 18H9.626l-.366-2.02a7.477 7.477 0 005.48 0L14.374 21zm1.376-8.25H12a.75.75 0 01-.75-.75V8.25a.75.75 0 111.5 0v3h3a.75.75 0 110 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
