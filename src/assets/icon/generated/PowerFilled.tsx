import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PowerFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM11.25 6a.75.75 0 111.5 0v6a.75.75 0 11-1.5 0V6zM12 19.5A7.5 7.5 0 017.833 5.764a.75.75 0 11.834 1.246 6 6 0 106.666 0 .75.75 0 11.834-1.246A7.5 7.5 0 0112 19.5z"
        fill={fillColor}
      />
    </svg>
  )
}
