import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsDownUp = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M11.03 15.97a.75.75 0 010 1.06l-3 3a.748.748 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V4.5a.75.75 0 011.5 0v13.19l1.72-1.72a.75.75 0 011.06 0zm9-9l-3-3a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V19.5a.75.75 0 101.5 0V6.31l1.72 1.72a.75.75 0 101.06-1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
