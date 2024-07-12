import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PenNib = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M23.25 8.689a1.487 1.487 0 00-.44-1.06l-6.438-6.44a1.5 1.5 0 00-2.122 0l-2.665 2.665-5.438 2.041a1.506 1.506 0 00-.958 1.158L3.01 20.126a.75.75 0 00.864.864l13.072-2.18a1.5 1.5 0 001.158-.952l2.041-5.438 2.665-2.67a1.488 1.488 0 00.44-1.061zm-6.55 8.643L5.936 19.125l4.441-4.44a2.625 2.625 0 10-1.061-1.062l-4.441 4.443L6.668 7.299l5.144-1.928 6.816 6.816-1.928 5.145zm-6.2-4.957a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm9-1.436L13.06 4.5l2.25-2.25 6.44 6.439-2.25 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
