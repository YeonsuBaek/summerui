import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Play = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.788 10.733L8.28 2.47a1.5 1.5 0 00-2.075.517 1.487 1.487 0 00-.205.75v16.525a1.494 1.494 0 001.5 1.488c.277 0 .548-.076.784-.22l13.504-8.263a1.48 1.48 0 000-2.532v-.002zM7.5 20.244V3.75L20.984 12 7.5 20.244z"
        fill={fillColor}
      />
    </svg>
  )
}
