import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Pause = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18.75 3H15a1.5 1.5 0 00-1.5 1.5v15A1.5 1.5 0 0015 21h3.75a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5zm0 16.5H15v-15h3.75v15zM9 3H5.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5H9a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 009 3zm0 16.5H5.25v-15H9v15z"
        fill={fillColor}
      />
    </svg>
  )
}
