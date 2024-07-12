import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FireExtinguisher = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.466 4.532l-5.69-1.706 2.813-1.407a.75.75 0 00-.675-1.34l-4.352 2.176a7.508 7.508 0 00-7.312 7.5V19.5a.75.75 0 101.5 0v-3h1.5v5.25a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-12a4.507 4.507 0 00-3.75-4.436V4.008l6.534 1.96a.75.75 0 10.432-1.436zM6.75 15V9.75A6.007 6.007 0 0112 3.8v1.515A4.506 4.506 0 008.25 9.75V15h-1.5zm9 6.75h-6V16.5h6v5.25zm0-12V15h-6V9.75a3 3 0 016 0z"
        fill={fillColor}
      />
    </svg>
  )
}
