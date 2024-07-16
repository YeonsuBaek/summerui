import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Infinity = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.25 12a5.25 5.25 0 01-8.963 3.712l-.03-.032-5.62-6.347a3.75 3.75 0 100 5.334l.798-.902a.751.751 0 011.125.995l-.815.92-.03.032a5.25 5.25 0 110-7.425l.03.033 5.62 6.347a3.75 3.75 0 100-5.334l-.798.902a.751.751 0 01-1.125-.995l.815-.92.03-.033A5.25 5.25 0 0123.25 12z"
        fill={fillColor}
      />
    </svg>
  )
}
