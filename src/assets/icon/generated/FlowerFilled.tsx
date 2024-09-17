import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FlowerFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.72 12.127a3.574 3.574 0 00-.245-.127 3.75 3.75 0 10-3.737-6.473 3.75 3.75 0 10-7.476 0 3.692 3.692 0 00-1.62-.63A3.75 3.75 0 004.524 12a3.75 3.75 0 103.737 6.474 3.75 3.75 0 107.476 0 3.73 3.73 0 003.079.522 3.75 3.75 0 00.903-6.87v.002zM12 14.625a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z"
        fill={fillColor}
      />
    </svg>
  )
}
