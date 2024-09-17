import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ClockClockwiseFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12.75 7.5v4.075l3.386 2.032a.75.75 0 11-.772 1.286l-3.75-2.25A.75.75 0 0111.25 12V7.5a.75.75 0 111.5 0zm8.537-2.193a.75.75 0 00-.818.162l-1.157 1.16c-.302-.329-.614-.656-.946-.993a9 9 0 10-.188 12.91.75.75 0 10-1.031-1.092 7.5 7.5 0 11.154-10.76c.332.335.644.665.947.996L16.72 9.22a.75.75 0 00.531 1.28H21a.75.75 0 00.75-.75V6a.75.75 0 00-.463-.693z"
        fill={fillColor}
      />
    </svg>
  )
}
