import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const RainbowFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 4.5A11.262 11.262 0 00.75 15.75v1.5a.75.75 0 00.75.75h21a.75.75 0 00.75-.75v-1.5A11.262 11.262 0 0012 4.5zm3 12a.75.75 0 01-.75-.75 2.25 2.25 0 00-4.5 0 .75.75 0 11-1.5 0 3.75 3.75 0 017.5 0 .75.75 0 01-.75.75zm3 0a.75.75 0 01-.75-.75 5.25 5.25 0 10-10.5 0 .75.75 0 11-1.5 0 6.75 6.75 0 0113.5 0 .75.75 0 01-.75.75zm3 0a.75.75 0 01-.75-.75 8.25 8.25 0 10-16.5 0 .75.75 0 11-1.5 0 9.75 9.75 0 1119.5 0 .75.75 0 01-.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
