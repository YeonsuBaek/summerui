import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Fire = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.24 14.376a5.4 5.4 0 01-4.365 4.364.75.75 0 11-.248-1.48c1.553-.261 2.87-1.58 3.134-3.136a.751.751 0 011.48.252h-.001zm3.01-.876a8.25 8.25 0 01-16.5 0c0-2.617 1.031-5.294 3.062-7.955a.75.75 0 011.118-.083l2.262 2.195 2.062-5.664a.75.75 0 011.184-.32c2.05 1.702 6.812 6.254 6.812 11.827zm-1.5 0c0-4.321-3.355-8.055-5.457-9.968l-2.088 5.725a.75.75 0 01-1.227.281L7.506 7.14C6.008 9.3 5.25 11.438 5.25 13.5a6.75 6.75 0 1013.5 0z"
        fill={fillColor}
      />
    </svg>
  )
}
