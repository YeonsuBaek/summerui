import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TreeEvergreenFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.674 18.329a.75.75 0 01-.674.421h-8.25v3.75a.75.75 0 11-1.5 0v-3.75H3a.75.75 0 01-.592-1.21L6.721 12H4.5a.75.75 0 01-.594-1.207l7.5-9.75a.75.75 0 011.188 0l7.5 9.75A.75.75 0 0119.5 12h-2.216l4.308 5.54a.75.75 0 01.082.789z"
        fill={fillColor}
      />
    </svg>
  )
}
