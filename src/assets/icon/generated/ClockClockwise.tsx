import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ClockClockwise = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12.75 7.5v4.075l3.386 2.032a.75.75 0 01-.772 1.286l-3.75-2.25A.75.75 0 0111.25 12V7.5a.75.75 0 111.5 0zM21 5.25a.75.75 0 00-.75.75v1.687a40.61 40.61 0 00-1.886-2.046 9 9 0 10-.188 12.91.75.75 0 10-1.031-1.092 7.5 7.5 0 11.156-10.765A42.131 42.131 0 0119.406 9H17.25a.75.75 0 100 1.5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
