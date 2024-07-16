import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretDoubleRight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M13.28 12.53l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 111.06-1.06l7.5 7.5a.749.749 0 010 1.06zm7.5-1.06l-7.5-7.5a.75.75 0 10-1.06 1.06L19.19 12l-6.97 6.97a.75.75 0 101.06 1.06l7.5-7.5a.75.75 0 000-1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
