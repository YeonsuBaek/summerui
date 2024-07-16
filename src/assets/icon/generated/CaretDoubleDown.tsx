import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretDoubleDown = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.03 12.22a.749.749 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 19.19l6.97-6.97a.747.747 0 011.06 0zm-8.56 1.06a.749.749 0 001.06 0l7.5-7.5a.75.75 0 00-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 10-1.06 1.06l7.5 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
