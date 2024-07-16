import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Megaphone = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.25 11.25a4.504 4.504 0 00-4.5-4.5h-3.731c-.273-.016-5.027-.35-9.554-4.147A1.5 1.5 0 003 3.75v15a1.5 1.5 0 002.465 1.148c3.54-2.97 7.218-3.82 8.785-4.059v2.974a1.5 1.5 0 00.668 1.25l1.03.687a1.5 1.5 0 002.286-.875l1.104-4.159a4.507 4.507 0 003.912-4.466zM4.5 18.743V3.75c4.013 3.367 8.122 4.219 9.75 4.429v6.139c-1.627.213-5.734 1.064-9.75 4.425zm12.281.75v.01l-1.031-.686V15.75h2.025l-.994 3.743zm1.969-5.243h-3v-6h3a3 3 0 010 6z"
        fill={fillColor}
      />
    </svg>
  )
}
