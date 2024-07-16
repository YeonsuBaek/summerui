import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CoatHanger = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.647 16.05L13.25 9l2.2-1.65a.75.75 0 00.3-.6 3.75 3.75 0 00-7.5 0 .75.75 0 001.5 0 2.25 2.25 0 014.47-.354L11.564 8.39l-.026.02-10.184 7.64a1.5 1.5 0 00.897 2.7h19.5a1.5 1.5 0 00.9-2.7h-.003zm-.897 1.2H2.25L12 9.937l9.75 7.313z"
        fill={fillColor}
      />
    </svg>
  )
}
