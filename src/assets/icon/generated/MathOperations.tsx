import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MathOperations = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M10.5 6.75a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h6a.75.75 0 01.75.75zm-.75 9.75H7.5v-2.25a.75.75 0 00-1.5 0v2.25H3.75a.75.75 0 100 1.5H6v2.25a.75.75 0 001.5 0V18h2.25a.75.75 0 100-1.5zm4.5 0h6a.75.75 0 100-1.5h-6a.75.75 0 100 1.5zm6 1.5h-6a.75.75 0 100 1.5h6a.75.75 0 100-1.5zm-5.78-8.47a.749.749 0 001.06 0l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06l-1.72-1.72 1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72a.75.75 0 10-1.06 1.06l1.72 1.72-1.72 1.72a.748.748 0 000 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
