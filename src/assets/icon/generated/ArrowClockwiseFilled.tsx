import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowClockwiseFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.5 5.25v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.53-1.28l1.593-1.594-.989-.905-.023-.023a7.5 7.5 0 10-.157 10.761.75.75 0 111.031 1.09A8.947 8.947 0 0112 21h-.124a9 9 0 116.476-15.375l1.024.938 1.843-1.847a.75.75 0 011.281.534z"
        fill={fillColor}
      />
    </svg>
  )
}
