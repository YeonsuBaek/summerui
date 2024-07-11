import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Moon = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.894 13.334a.75.75 0 00-.75-.188A8.257 8.257 0 0110.851 2.854a.749.749 0 00-.938-.938 9.829 9.829 0 00-4.96 3.469A9.75 9.75 0 0012.75 21a9.665 9.665 0 005.861-1.957 9.83 9.83 0 003.469-4.96.75.75 0 00-.186-.749zm-4.185 4.51A8.25 8.25 0 016.156 6.292a8.344 8.344 0 012.943-2.438 9.76 9.76 0 0011.05 11.047 8.346 8.346 0 01-2.44 2.943z"
        fill={fillColor}
      />
    </svg>
  )
}
