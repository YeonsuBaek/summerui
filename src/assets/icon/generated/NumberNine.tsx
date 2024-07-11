import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberNine = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 3.75a5.25 5.25 0 101.464 10.29l-2.87 5.092a.752.752 0 101.312.735l4.646-8.25A5.25 5.25 0 0012 3.75zm0 9a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
