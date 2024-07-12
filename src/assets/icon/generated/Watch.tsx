import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Watch = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 12a7.495 7.495 0 00-3.066-6.044l-.585-3.223A1.5 1.5 0 0014.374 1.5H9.626a1.5 1.5 0 00-1.475 1.233l-.585 3.223a7.49 7.49 0 000 12.088l.585 3.223A1.5 1.5 0 009.626 22.5h4.748a1.5 1.5 0 001.475-1.233l.585-3.223A7.495 7.495 0 0019.5 12zM9.626 3h4.748l.366 2.02a7.477 7.477 0 00-5.48 0L9.626 3zM6 12a6 6 0 116 6 6.006 6.006 0 01-6-6zm8.374 9H9.626l-.366-2.02a7.477 7.477 0 005.48 0L14.374 21zm-3.124-9V8.25a.75.75 0 111.5 0v3h3a.75.75 0 110 1.5H12a.75.75 0 01-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
