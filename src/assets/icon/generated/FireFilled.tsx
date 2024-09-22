import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FireFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M13.442 1.673a.75.75 0 00-1.184.32l-2.063 5.664L7.93 5.462a.75.75 0 00-1.118.083C4.782 8.205 3.75 10.883 3.75 13.5a8.25 8.25 0 0016.5 0c0-5.573-4.762-10.125-6.808-11.827zm3.798 12.703a5.4 5.4 0 01-4.365 4.364.75.75 0 11-.248-1.48c1.553-.261 2.87-1.58 3.134-3.136a.751.751 0 011.48.252h-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
