import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ExclamationMark = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M13.5 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 15a.75.75 0 00.75-.75V4.5a.75.75 0 10-1.5 0v9.75A.75.75 0 0012 15z"
        fill={fillColor}
      />
    </svg>
  )
}
