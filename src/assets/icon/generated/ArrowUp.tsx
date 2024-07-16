import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowUp = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.28 11.03a.75.75 0 01-1.06 0l-5.47-5.47v14.69a.75.75 0 11-1.5 0V5.56l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.749.749 0 011.06 0l6.75 6.75a.75.75 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
