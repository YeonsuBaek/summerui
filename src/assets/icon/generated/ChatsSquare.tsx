import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatsSquare = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 7.5h-3v-3a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v12a.75.75 0 001.219.583l3.281-2.645v2.812a1.5 1.5 0 001.5 1.5h8.774l3.507 2.833a.75.75 0 001-.053.75.75 0 00.219-.53V9a1.5 1.5 0 00-1.5-1.5zM6.24 12.917L3.75 14.93V4.5h12v8.25H6.71a.75.75 0 00-.47.167zm14.01 6.513l-2.49-2.013a.75.75 0 00-.468-.167H8.25v-3h7.5a1.5 1.5 0 001.5-1.5V9h3v10.43z"
        fill={fillColor}
      />
    </svg>
  )
}
