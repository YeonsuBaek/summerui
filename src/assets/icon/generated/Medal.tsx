import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Medal = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 9a8.25 8.25 0 10-13.5 6.36v7.14a.75.75 0 001.086.671L12 21.094l4.165 2.082c.105.05.22.075.335.074a.75.75 0 00.75-.75v-7.14a8.237 8.237 0 003-6.36zm-15 0A6.75 6.75 0 1112 15.75 6.758 6.758 0 015.25 9zm10.5 12.287l-3.415-1.707a.75.75 0 00-.672 0L8.25 21.287v-4.94a8.24 8.24 0 007.5 0v4.94zM12 14.25a5.25 5.25 0 100-10.499 5.25 5.25 0 000 10.499zm0-9a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
