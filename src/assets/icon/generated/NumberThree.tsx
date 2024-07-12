import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberThree = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.5 15a5.249 5.249 0 01-8.75 3.913.75.75 0 111-1.117 3.75 3.75 0 102.5-6.546.75.75 0 01-.6-1.2l3.6-4.8h-6a.75.75 0 110-1.5h7.5a.75.75 0 01.6 1.2l-3.735 4.98A5.26 5.26 0 0116.5 15z"
        fill={fillColor}
      />
    </svg>
  )
}
