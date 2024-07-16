import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ListSearch = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M3 6a.75.75 0 01.75-.75h16.5a.75.75 0 110 1.5H3.75A.75.75 0 013 6zm.75 6.75h6.75a.75.75 0 100-1.5H3.75a.75.75 0 100 1.5zm8.25 4.5H3.75a.75.75 0 100 1.5H12a.75.75 0 100-1.5zm10.28 1.28a.747.747 0 01-1.06 0l-1.907-1.902a3.75 3.75 0 111.065-1.066l1.903 1.904a.75.75 0 010 1.065zm-5.03-2.78a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
