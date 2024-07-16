import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Microphone = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 16.5a4.504 4.504 0 004.5-4.5V6a4.5 4.5 0 10-9 0v6a4.505 4.505 0 004.5 4.5zM9 6a3 3 0 116 0v6a3 3 0 01-6 0V6zm3.75 13.462V22.5a.75.75 0 11-1.5 0v-3.038A7.51 7.51 0 014.5 12 .75.75 0 116 12a6 6 0 1012 0 .75.75 0 111.5 0 7.51 7.51 0 01-6.75 7.462z"
        fill={fillColor}
      />
    </svg>
  )
}
