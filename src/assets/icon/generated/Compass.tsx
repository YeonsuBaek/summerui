import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Compass = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm4.164-13.421l-6 3a.754.754 0 00-.335.335l-3 6a.75.75 0 001.007 1.007l6-3a.755.755 0 00.335-.335l3-6a.75.75 0 00-1.007-1.007zm-3.227 6.109l-3.76 1.885 1.886-3.76 3.764-1.882-1.89 3.757z"
        fill={fillColor}
      />
    </svg>
  )
}
