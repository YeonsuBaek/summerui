import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TextAUnderline = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M5.68 16.429a.749.749 0 00.999-.36L8.24 12.75h7.518l1.562 3.32a.751.751 0 001.358-.64l-6-12.75a.75.75 0 00-1.358 0l-6 12.75a.75.75 0 00.36.999zM12 4.762l3.053 6.488H8.947L12 4.762zm9 15.488a.75.75 0 01-.75.75H3.75a.75.75 0 110-1.5h16.5a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
