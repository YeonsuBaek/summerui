import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.006 3.75a8.26 8.26 0 00-8.256 8.225.767.767 0 01-.697.775.75.75 0 01-.803-.75c0-1.049.168-2.091.5-3.086a.375.375 0 00-.445-.486A6.008 6.008 0 00.75 14.25c0 3.3 2.79 6 6.094 6H15a8.26 8.26 0 008.243-8.576c-.17-4.405-3.83-7.924-8.237-7.924z"
        fill={fillColor}
      />
    </svg>
  )
}
