import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CrownSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.647 6.9a1.486 1.486 0 00-1.772.355l-3.157 3.403-3.356-7.528v-.009a1.5 1.5 0 00-2.724 0v.01l-3.356 7.527-3.157-3.403A1.5 1.5 0 001.53 8.543l2.126 9.738A1.5 1.5 0 005.13 19.5h13.74a1.5 1.5 0 001.474-1.219l2.126-9.738c0-.01 0-.02.007-.03a1.486 1.486 0 00-.83-1.613zm-2.77 11.07l-.006.03H5.129l-.006-.03L3 8.25l.013.015 3.938 4.241a.75.75 0 001.235-.204L12 3.75l3.815 8.555a.75.75 0 001.235.204l3.938-4.241L21 8.25l-2.123 9.72z"
        fill={fillColor}
      />
    </svg>
  )
}
