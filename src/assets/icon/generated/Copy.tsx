import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Copy = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 3h-12a.75.75 0 00-.75.75V7.5H3.75a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V16.5h3.75a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75zM15 19.5H4.5V9H15v10.5zm4.5-4.5h-3V8.25a.75.75 0 00-.75-.75H9v-3h10.5V15z"
        fill={fillColor}
      />
    </svg>
  )
}
