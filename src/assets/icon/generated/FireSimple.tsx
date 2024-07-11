import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FireSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M13.442 1.673a.75.75 0 00-1.184.32l-2.063 5.664L7.93 5.462a.75.75 0 00-1.118.083C4.782 8.205 3.75 10.883 3.75 13.5a8.25 8.25 0 0016.5 0c0-5.573-4.762-10.125-6.808-11.827zM12 20.25a6.757 6.757 0 01-6.75-6.75c0-2.063.758-4.2 2.256-6.36l2.472 2.398a.75.75 0 001.227-.281l2.088-5.725c2.102 1.913 5.457 5.647 5.457 9.968A6.757 6.757 0 0112 20.25z"
        fill={fillColor}
      />
    </svg>
  )
}
