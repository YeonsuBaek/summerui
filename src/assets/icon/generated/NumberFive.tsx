import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberFive = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.5 15a5.25 5.25 0 01-8.75 3.913.75.75 0 111-1.117 3.75 3.75 0 10.072-5.653.75.75 0 01-1.219-.719l1.412-7.071a.75.75 0 01.735-.603h6a.75.75 0 110 1.5h-5.385l-.968 4.838A5.25 5.25 0 0116.5 15z"
        fill={fillColor}
      />
    </svg>
  )
}
