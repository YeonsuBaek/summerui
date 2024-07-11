import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Check = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.53 7.28l-12 12a.748.748 0 01-1.06 0l-5.25-5.25a.75.75 0 111.06-1.06L9 17.69 20.47 6.22a.75.75 0 111.06 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
