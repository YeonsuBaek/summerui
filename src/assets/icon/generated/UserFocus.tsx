import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const UserFocus = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 3.75v3.375a.75.75 0 11-1.5 0V4.5h-2.625a.75.75 0 110-1.5h3.375a.75.75 0 01.75.75zm-.75 12.375a.75.75 0 00-.75.75V19.5h-2.625a.75.75 0 100 1.5h3.375a.75.75 0 00.75-.75v-3.375a.75.75 0 00-.75-.75zM7.125 19.5H4.5v-2.625a.75.75 0 10-1.5 0v3.375a.75.75 0 00.75.75h3.375a.75.75 0 100-1.5zM3.75 7.875a.75.75 0 00.75-.75V4.5h2.625a.75.75 0 000-1.5H3.75a.75.75 0 00-.75.75v3.375a.75.75 0 00.75.75zM16.5 16.5a.748.748 0 01-.6-.3 4.876 4.876 0 00-7.8 0 .75.75 0 11-1.2-.9 6.369 6.369 0 012.569-2.033 3.75 3.75 0 115.057 0 6.369 6.369 0 012.571 2.032.749.749 0 01-.597 1.201zM12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
