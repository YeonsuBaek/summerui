import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const IceCream = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 9.128V9a7.5 7.5 0 00-15 0v.128a2.25 2.25 0 00.75 4.372h.308l5.14 8.994a1.5 1.5 0 002.604 0l5.14-8.994h.308a2.25 2.25 0 00.75-4.372zM7.285 13.5H9.1l3.808 6.662L12 21.75 7.285 13.5zm5.352 0l2.039 3.568-.905 1.583-2.943-5.151h1.809zm2.906 2.057l-1.18-2.057h2.352l-1.172 2.057zM18.75 12H5.25a.75.75 0 110-1.5.75.75 0 00.75-.75V9a6 6 0 1112 0v.75a.75.75 0 00.75.75.75.75 0 110 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
