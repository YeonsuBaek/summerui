import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowUpFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.443 10.787a.75.75 0 01-.693.463h-6v9a.75.75 0 11-1.5 0v-9h-6a.75.75 0 01-.53-1.28l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 01.163.817z"
        fill={fillColor}
      />
    </svg>
  )
}
