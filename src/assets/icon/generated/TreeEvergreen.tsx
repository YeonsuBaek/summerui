import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TreeEvergreen = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.593 17.54L17.28 12h2.22a.75.75 0 00.594-1.207l-7.5-9.75a.75.75 0 00-1.188 0l-7.5 9.75A.75.75 0 004.5 12h2.216l-4.312 5.54A.75.75 0 003 18.75h8.25v3.75a.75.75 0 101.5 0v-3.75H21a.75.75 0 00.593-1.21zm-17.06-.29l4.313-5.54a.75.75 0 00-.596-1.21H6.023L12 2.73l5.977 7.77H15.75a.75.75 0 00-.591 1.21l4.307 5.54H4.534z"
        fill={fillColor}
      />
    </svg>
  )
}
