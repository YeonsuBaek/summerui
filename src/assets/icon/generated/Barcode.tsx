import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Barcode = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.75 4.5v3.75a.75.75 0 11-1.5 0v-3h-3a.75.75 0 110-1.5H21a.75.75 0 01.75.75zm-15 14.25h-3v-3a.75.75 0 10-1.5 0v3.75a.75.75 0 00.75.75h3.75a.75.75 0 100-1.5zM21 15a.75.75 0 00-.75.75v3h-3a.75.75 0 100 1.5H21a.75.75 0 00.75-.75v-3.75A.75.75 0 0021 15zM3 9a.75.75 0 00.75-.75v-3h3a.75.75 0 000-1.5H3a.75.75 0 00-.75.75v3.75A.75.75 0 003 9zm4.5-1.5a.75.75 0 00-.75.75v7.5a.75.75 0 101.5 0v-7.5a.75.75 0 00-.75-.75zm9.75 8.25v-7.5a.75.75 0 10-1.5 0v7.5a.75.75 0 101.5 0zM13.5 7.5a.75.75 0 00-.75.75v7.5a.75.75 0 101.5 0v-7.5a.75.75 0 00-.75-.75zm-3 0a.75.75 0 00-.75.75v7.5a.75.75 0 101.5 0v-7.5a.75.75 0 00-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
