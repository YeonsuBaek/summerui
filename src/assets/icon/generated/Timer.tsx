import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Timer = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 3.75a9 9 0 109 9 9.01 9.01 0 00-9-9zm0 16.5a7.5 7.5 0 117.5-7.5 7.508 7.508 0 01-7.5 7.5zm4.28-11.78a.748.748 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l3.75-3.75a.75.75 0 011.06 0zM9 1.5a.75.75 0 01.75-.75h4.5a.75.75 0 110 1.5h-4.5A.75.75 0 019 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
