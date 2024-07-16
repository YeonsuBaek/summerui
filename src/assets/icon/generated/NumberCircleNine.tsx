import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleNine = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm1.688-13.048a3.375 3.375 0 10-1.516 6.292l-1.566 2.625a.75.75 0 00.83 1.116.75.75 0 00.46-.344l3.027-5.078a3.38 3.38 0 00-1.236-4.611zm-.063 3.86a1.875 1.875 0 11-3.244-1.874 1.875 1.875 0 013.242 1.874h.002z"
        fill={fillColor}
      />
    </svg>
  )
}
