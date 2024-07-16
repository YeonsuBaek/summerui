import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsHorizontal = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.28 12.53l-3 3a.75.75 0 01-1.06-1.06l1.72-1.72H4.06l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 111.06 1.06l-1.72 1.72h15.88l-1.72-1.72a.75.75 0 111.06-1.06l3 3a.747.747 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
