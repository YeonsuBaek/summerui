import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Storefront = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 9c0-.07-.01-.14-.028-.206l-1.345-4.707A1.507 1.507 0 0018.937 3H5.063a1.507 1.507 0 00-1.439 1.088L2.28 8.794A.74.74 0 002.25 9v1.5a3.75 3.75 0 001.5 3v6.75a.75.75 0 00.75.75h15a.75.75 0 00.75-.75V13.5a3.75 3.75 0 001.5-3V9zM5.062 4.5h13.875l1.071 3.75H3.995L5.062 4.5zM9.75 9.75h4.5v.75a2.25 2.25 0 01-4.5 0v-.75zm-1.5 0v.75a2.25 2.25 0 01-3.293 1.993.741.741 0 00-.17-.1A2.25 2.25 0 013.75 10.5v-.75h4.5zm10.5 9.75H5.25v-5.325A3.75 3.75 0 009 12.75a3.751 3.751 0 006 0 3.75 3.75 0 003.75 1.425V19.5zm.462-7.106a.757.757 0 00-.169.098A2.25 2.25 0 0115.75 10.5v-.75h4.5v.75a2.25 2.25 0 01-1.038 1.894z"
        fill={fillColor}
      />
    </svg>
  )
}
