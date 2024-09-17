import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LeafFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.948 3.757a.75.75 0 00-.705-.705c-7.137-.42-12.854 1.73-15.291 5.76a8.165 8.165 0 00-1.196 4.594 9.537 9.537 0 00.622 3.019.376.376 0 00.62.134l7.969-8.09a.75.75 0 111.06 1.06L5.32 18.37 3.99 19.7a.769.769 0 00-.056 1.041.75.75 0 001.098.04l1.574-1.574c1.325.642 2.663.992 3.99 1.038a8.15 8.15 0 004.593-1.196c4.03-2.437 6.18-8.153 5.76-15.291z"
        fill={fillColor}
      />
    </svg>
  )
}
