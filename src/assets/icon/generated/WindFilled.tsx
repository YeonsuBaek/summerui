import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const WindFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M11.25 9.75h-9a.75.75 0 01-.75-.8.766.766 0 01.775-.7H10.5a.75.75 0 00.75-.8.766.766 0 00-.775-.7H8.652a.375.375 0 01-.375-.43 3 3 0 112.973 3.43zm11.242-.215a3 3 0 00-5.961-.214.376.376 0 00.375.429h1.822a.766.766 0 01.774.7.75.75 0 01-.75.8H3.025a.766.766 0 00-.775.7.75.75 0 00.75.8h16.5a3 3 0 002.992-3.215zM14.25 14.25H3.775a.766.766 0 00-.775.7.75.75 0 00.75.8h9.725a.766.766 0 01.773.7.75.75 0 01-.75.8h-1.846a.376.376 0 00-.375.43 3 3 0 102.973-3.43z"
        fill={fillColor}
      />
    </svg>
  )
}
