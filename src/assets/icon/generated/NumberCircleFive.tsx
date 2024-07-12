import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberCircleFive = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm-.864-12l-.393 2.357c.288-.072.585-.108.882-.107a3.375 3.375 0 010 6.75 3.333 3.333 0 01-2.41-.975.75.75 0 111.07-1.05 1.85 1.85 0 001.34.525 1.875 1.875 0 100-3.75 1.85 1.85 0 00-1.34.525.75.75 0 01-1.275-.649l.75-4.5a.75.75 0 01.74-.626h3.75a.75.75 0 110 1.5h-3.114z"
        fill={fillColor}
      />
    </svg>
  )
}
