import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudRainFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.874 18.416l-3 4.5a.753.753 0 01-1.04.208.75.75 0 01-.208-1.04l3-4.5a.75.75 0 011.248.832zm6.864-10.208a7.125 7.125 0 00-14.23.068A.767.767 0 016.75 9h-.056A.763.763 0 016 8.193c.026-.522.1-1.04.218-1.548a.375.375 0 00-.468-.448 4.883 4.883 0 00-3.5 4.712c.019 2.691 2.261 4.841 4.954 4.841h3.394l-2.222 3.334a.75.75 0 001.248.832l2.777-4.166h2.224a7.132 7.132 0 007.113-7.542z"
        fill={fillColor}
      />
    </svg>
  )
}
