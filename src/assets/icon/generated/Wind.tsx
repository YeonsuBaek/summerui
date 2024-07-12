import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Wind = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M17.25 17.25a3 3 0 01-3 3c-1.284 0-2.527-.837-2.953-1.99a.75.75 0 011.406-.52c.21.567.89 1.01 1.547 1.01a1.5 1.5 0 100-3H3.75a.75.75 0 110-1.5h10.5a3 3 0 013 3zm-6-7.5a3 3 0 000-6c-1.284 0-2.527.837-2.953 1.99a.75.75 0 001.406.52c.21-.567.89-1.01 1.547-1.01a1.5 1.5 0 010 3h-9a.75.75 0 000 1.5h9zm8.25-3c-1.284 0-2.527.837-2.953 1.99a.75.75 0 001.406.52c.21-.567.89-1.01 1.547-1.01a1.5 1.5 0 010 3H3a.75.75 0 100 1.5h16.5a3 3 0 000-6z"
        fill={fillColor}
      />
    </svg>
  )
}
