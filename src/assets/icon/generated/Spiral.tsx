import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Spiral = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.25 13.5a.75.75 0 11-1.5 0 9.01 9.01 0 00-9-9 8.26 8.26 0 00-8.25 8.25 7.508 7.508 0 007.5 7.5 6.758 6.758 0 006.75-6.75 6.006 6.006 0 00-6-6 5.256 5.256 0 00-5.25 5.25 4.505 4.505 0 004.5 4.5 3.75 3.75 0 003.75-3.75 3 3 0 00-3-3 2.25 2.25 0 00-2.25 2.25 1.5 1.5 0 001.5 1.5.75.75 0 00.75-.75.75.75 0 110-1.5 1.5 1.5 0 011.5 1.5A2.25 2.25 0 0112 15.75a3 3 0 01-3-3A3.75 3.75 0 0112.75 9a4.505 4.505 0 014.5 4.5A5.256 5.256 0 0112 18.75a6.006 6.006 0 01-6-6A6.758 6.758 0 0112.75 6a7.508 7.508 0 017.5 7.5A8.26 8.26 0 0112 21.75a9.01 9.01 0 01-9-9A9.76 9.76 0 0112.75 3a10.511 10.511 0 0110.5 10.5z"
        fill={fillColor}
      />
    </svg>
  )
}