import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BackspaceFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={`${size / 16}rem`}
      height={`${size / 16}rem`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.25 3.75H6.425a1.511 1.511 0 00-1.287.728L.857 11.614a.75.75 0 000 .772l4.281 7.136a1.511 1.511 0 001.287.728H20.25a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zm-4.72 9.97a.75.75 0 11-1.06 1.06l-1.72-1.72-1.72 1.72a.75.75 0 11-1.06-1.06L11.69 12l-1.72-1.72a.75.75 0 111.06-1.06l1.72 1.72 1.72-1.72a.751.751 0 011.06 1.06L13.81 12l1.72 1.72z"
        fill={fillColor}
      />
    </svg>
  )
}
