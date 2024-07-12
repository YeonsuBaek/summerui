import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberTwo = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.5 19.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.6-1.2l6.744-8.993a2.998 2.998 0 00-1.635-4.73 3 3 0 00-3.155 1.118c-.141.188-.26.391-.355.606a.75.75 0 01-1.374-.601 4.5 4.5 0 117.718 4.508L9.75 18.75h6a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
