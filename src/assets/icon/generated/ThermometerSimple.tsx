import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThermometerSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12.75 14.344V8.25a.75.75 0 10-1.5 0v6.094a3 3 0 101.5 0zM12 18.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3.75-6.188V4.5a3.75 3.75 0 00-7.5 0v8.063a6 6 0 107.5 0zM12 21.75a4.5 4.5 0 01-2.57-8.194.75.75 0 00.32-.618V4.5a2.25 2.25 0 114.5 0v8.438a.75.75 0 00.32.614A4.5 4.5 0 0112 21.75z"
        fill={fillColor}
      />
    </svg>
  )
}
