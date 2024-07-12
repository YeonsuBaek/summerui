import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Knife = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.738 3.012a2.61 2.61 0 00-3.686 0L1.719 19.35a.75.75 0 00.362 1.26c1.113.259 2.252.39 3.394.39 3.09 0 6.18-.956 9.09-2.834 2.977-1.922 4.704-4.108 4.78-4.201a.75.75 0 00-.06-.993l-1.911-1.91 4.364-4.365a2.61 2.61 0 000-3.685zm-4.01 10.53a20.663 20.663 0 01-4.018 3.39c-3.228 2.071-6.557 2.898-9.916 2.465L13.687 9.5l4.041 4.041zm2.95-7.904l-4.366 4.365-1.563-1.566 4.364-4.365a1.106 1.106 0 011.564 1.565v.001z"
        fill={fillColor}
      />
    </svg>
  )
}
