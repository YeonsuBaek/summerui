import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaintBrush = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.75 3a.75.75 0 00-.75-.75c-4.133 0-8.373 4.66-10.728 7.747A5.625 5.625 0 003 15.375c0 2.895-1.832 4.193-1.92 4.253A.75.75 0 001.5 21h7.125a5.625 5.625 0 005.378-7.272C17.091 11.373 21.75 7.133 21.75 3zM8.625 19.5H3.247c.632-.9 1.253-2.258 1.253-4.125A4.125 4.125 0 118.625 19.5zm3.04-8.855c.32-.416.636-.808.945-1.176a7.146 7.146 0 011.921 1.92c-.369.31-.76.625-1.176.947a5.678 5.678 0 00-1.69-1.69zm4.003-.25a8.678 8.678 0 00-2.063-2.063c2.98-3.238 5.227-4.22 6.553-4.492-.267 1.328-1.253 3.575-4.49 6.554z"
        fill={fillColor}
      />
    </svg>
  )
}
