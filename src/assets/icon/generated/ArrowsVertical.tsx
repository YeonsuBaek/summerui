import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsVertical = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.53 18.22a.748.748 0 010 1.06l-3 3a.747.747 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V4.06L9.53 5.78a.75.75 0 11-1.06-1.06l3-3a.749.749 0 011.06 0l3 3a.75.75 0 11-1.06 1.06l-1.72-1.72v15.88l1.72-1.72a.749.749 0 011.06 0z"
        fill={fillColor}
      />
    </svg>
  )
}
