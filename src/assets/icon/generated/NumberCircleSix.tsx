import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleSix = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm0-9.75h-.17l1.564-2.616a.75.75 0 00-1.288-.768l-3.022 5.062A3.375 3.375 0 1012 10.5zm0 5.25a1.875 1.875 0 110-3.751 1.875 1.875 0 010 3.751z"
        fill={fillColor}
      />
    </svg>
  )
}
