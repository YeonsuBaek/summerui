import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PushPinSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 15.75h-.87L17.393 4.5H18A.75.75 0 1018 3H6a.75.75 0 000 1.5h.606L4.62 15.75H3.75a.75.75 0 100 1.5h7.5v5.25a.75.75 0 101.5 0v-5.25h7.5a.75.75 0 100-1.5zM8.13 4.5h7.74l1.986 11.25H6.144L8.13 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
