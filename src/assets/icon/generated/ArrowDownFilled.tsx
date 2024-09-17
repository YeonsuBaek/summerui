import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowDownFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.28 14.03l-6.75 6.75a.747.747 0 01-1.06 0l-6.75-6.75a.75.75 0 01.53-1.28h6v-9a.75.75 0 111.5 0v9h6a.75.75 0 01.53 1.28z"
        fill={fillColor}
      />
    </svg>
  )
}
