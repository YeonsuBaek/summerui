import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Thermometer = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.875 5.25a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25zm0 3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM12 14.344V8.25a.75.75 0 10-1.5 0v6.094a3 3 0 101.5 0zm-.75 4.406a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM15 12.562V4.5a3.75 3.75 0 00-7.5 0v8.063a6 6 0 107.5 0zm-3.75 9.188a4.5 4.5 0 01-2.57-8.194.75.75 0 00.32-.618V4.5a2.25 2.25 0 114.5 0v8.438a.75.75 0 00.32.614 4.5 4.5 0 01-2.57 8.198z"
        fill={fillColor}
      />
    </svg>
  )
}
