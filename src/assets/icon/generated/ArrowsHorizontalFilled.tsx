import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsHorizontalFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.28 12.53l-3 3A.75.75 0 0118 15v-2.25H6V15a.75.75 0 01-1.28.53l-3-3a.749.749 0 010-1.06l3-3A.75.75 0 016 9v2.25h12V9a.75.75 0 011.28-.53l3 3a.748.748 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
