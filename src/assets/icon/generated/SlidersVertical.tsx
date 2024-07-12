import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SlidersVertical = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M6 9.844V3.75a.75.75 0 00-1.5 0v6.094a3 3 0 000 5.812v4.594a.75.75 0 101.5 0v-4.594a3 3 0 000-5.812zm-.75 4.406a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5-8.906V3.75a.75.75 0 10-1.5 0v1.594a3 3 0 000 5.812v9.094a.75.75 0 101.5 0v-9.094a3 3 0 000-5.812zM12 9.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9.75 6a3.006 3.006 0 00-2.25-2.906V3.75a.75.75 0 10-1.5 0v9.094a3 3 0 000 5.812v1.594a.75.75 0 101.5 0v-1.594a3.006 3.006 0 002.25-2.906zm-3 1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill={fillColor}
      />
    </svg>
  )
}
