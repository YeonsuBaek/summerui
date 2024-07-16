import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleThree = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm3-6a3.375 3.375 0 01-5.785 2.362.751.751 0 111.07-1.05 1.875 1.875 0 101.34-3.187.75.75 0 01-.614-1.18l1.798-2.57H9.75a.75.75 0 010-1.5h4.5a.75.75 0 01.614 1.18l-1.969 2.813A3.382 3.382 0 0115 14.25z"
        fill={fillColor}
      />
    </svg>
  )
}
