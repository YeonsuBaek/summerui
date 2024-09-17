import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudSnowFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M8.25 18.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm2.625.375a1.124 1.124 0 100 2.249 1.124 1.124 0 000-2.249zm4.5-1.5a1.124 1.124 0 100 2.249 1.124 1.124 0 000-2.249zm-9 3.75a1.124 1.124 0 100 2.249 1.124 1.124 0 000-2.249zm8.25 0a1.124 1.124 0 100 2.249 1.124 1.124 0 000-2.249zm7.113-12.792a7.125 7.125 0 00-14.23.068A.767.767 0 016.75 9h-.056A.763.763 0 016 8.193c.026-.522.1-1.04.218-1.548a.375.375 0 00-.468-.448 4.883 4.883 0 00-3.5 4.712c.019 2.691 2.261 4.841 4.954 4.841h7.421a7.132 7.132 0 007.113-7.542z"
        fill={fillColor}
      />
    </svg>
  )
}
