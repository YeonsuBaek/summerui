import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const WarningCircle = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm-.75-7.5V7.5a.75.75 0 111.5 0v5.25a.75.75 0 11-1.5 0zm1.875 3.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
