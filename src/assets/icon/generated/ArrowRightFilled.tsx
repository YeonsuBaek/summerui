import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowRightFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.78 12.53l-6.75 6.75a.75.75 0 01-1.28-.53v-6h-9a.75.75 0 110-1.5h9v-6a.75.75 0 011.28-.53l6.75 6.75a.747.747 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
