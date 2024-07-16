import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsLeftRight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.03 17.03l-3 3a.75.75 0 01-1.06-1.06l1.72-1.72H4.5a.75.75 0 110-1.5h13.19l-1.72-1.72a.75.75 0 011.06-1.06l3 3a.747.747 0 010 1.06zm-13.06-6a.75.75 0 001.06-1.06L6.31 8.25H19.5a.75.75 0 100-1.5H6.31l1.72-1.72a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3z"
        fill={fillColor}
      />
    </svg>
  )
}
