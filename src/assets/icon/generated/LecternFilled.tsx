import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LecternFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.09 11.329l-3.75-7.5A1.493 1.493 0 0018 3H6a1.493 1.493 0 00-1.34.829l-3.75 7.5A1.5 1.5 0 002.25 13.5h9v6H9A.75.75 0 109 21h6a.75.75 0 100-1.5h-2.25v-6h9a1.5 1.5 0 001.342-2.171h-.001zM18 11.25H6a.75.75 0 110-1.5h12a.75.75 0 110 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
