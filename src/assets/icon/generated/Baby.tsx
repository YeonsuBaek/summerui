import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Baby = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M8.625 13.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm6.75-2.25a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm-1.15 4.24a4.219 4.219 0 01-4.45 0 .75.75 0 00-.8 1.27 5.719 5.719 0 006.05 0 .75.75 0 00-.8-1.27zM21.75 12A9.75 9.75 0 1112 2.25 9.76 9.76 0 0121.75 12zm-1.5 0a8.26 8.26 0 00-7.883-8.242C11.28 5.286 11.25 6.738 11.25 6.75a.75.75 0 101.5 0 .75.75 0 111.5 0 2.25 2.25 0 11-4.5 0c0-.068.012-1.34.793-2.872A8.25 8.25 0 1020.25 12z"
        fill={fillColor}
      />
    </svg>
  )
}
