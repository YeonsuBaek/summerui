import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleEight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm2.045-8.682a3 3 0 10-4.09 0 3.375 3.375 0 104.09 0zM10.5 9.375a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5 6.75a1.875 1.875 0 110-3.751 1.875 1.875 0 010 3.751z"
        fill={fillColor}
      />
    </svg>
  )
}
