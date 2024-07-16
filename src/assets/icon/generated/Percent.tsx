import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Percent = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.28 5.779l-13.5 13.5a.75.75 0 01-1.06-1.062l13.5-13.5a.75.75 0 111.06 1.06v.002zM4.739 9.509a3.375 3.375 0 114.774-4.772A3.375 3.375 0 014.738 9.51zm.512-2.384A1.875 1.875 0 109 7.122a1.875 1.875 0 00-3.75.003zm15 9.75a3.375 3.375 0 11-6.75-.002 3.375 3.375 0 016.75.002zm-1.5 0a1.875 1.875 0 10-3.75-.001 1.875 1.875 0 003.75 0z"
        fill={fillColor}
      />
    </svg>
  )
}
