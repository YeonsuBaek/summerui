import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BoxArrowUp = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.921 6.414l-1.5-3A.75.75 0 0018.75 3H5.25a.75.75 0 00-.671.414l-1.5 3A.757.757 0 003 6.75V19.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V6.75a.757.757 0 00-.079-.336zM5.713 4.5h12.574l.75 1.5H4.963l.75-1.5zm13.787 15h-15v-12h15v12zm-3.97-7.28a.75.75 0 11-1.06 1.06l-1.72-1.72v5.69a.75.75 0 11-1.5 0v-5.69l-1.72 1.72a.75.75 0 11-1.06-1.06l3-3a.749.749 0 011.06 0l3 3z"
        fill={fillColor}
      />
    </svg>
  )
}
