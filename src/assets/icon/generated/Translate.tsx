import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Translate = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.17 19.914l-5.25-10.5a.75.75 0 00-1.341 0l-2.036 4.072a8.25 8.25 0 01-4.418-1.586A9.718 9.718 0 0012.721 6H15a.75.75 0 100-1.5H9.75V3a.75.75 0 00-1.5 0v1.5H3A.75.75 0 003 6h8.215A8.227 8.227 0 019 10.908a8.225 8.225 0 01-1.781-2.906.75.75 0 10-1.414.5 9.715 9.715 0 002.07 3.404A8.208 8.208 0 013 13.5.75.75 0 103 15a9.7 9.7 0 006-2.07 9.767 9.767 0 004.822 1.998l-2.493 4.986a.751.751 0 001.341.672L13.963 18h6.573l1.293 2.586a.75.75 0 101.341-.672zM14.713 16.5l2.537-5.073 2.536 5.073h-5.073z"
        fill={fillColor}
      />
    </svg>
  )
}
