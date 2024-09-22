import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretCircleRightFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm2.78 10.28l-3.75 3.75a.75.75 0 11-1.06-1.06L13.19 12 9.97 8.78a.75.75 0 011.06-1.06l3.75 3.75a.747.747 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
