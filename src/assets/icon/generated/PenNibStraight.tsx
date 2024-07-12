import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PenNibStraight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.843 11.615c-.005-.013-.01-.025-.017-.036L18 6.553V3a1.5 1.5 0 00-1.5-1.5h-9A1.5 1.5 0 006 3v3.555l-2.826 5.024-.018.036a1.494 1.494 0 00.137 1.553l.01.013 8.104 10.527a.748.748 0 001.187 0l8.103-10.527.01-.013a1.492 1.492 0 00.136-1.553zM16.5 3v3h-9V3h9zM12 13.5a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm.75 7.547V14.89a2.624 2.624 0 10-1.5 0v6.156L4.5 12.28 7.19 7.5h9.621l2.689 4.781-6.75 8.766z"
        fill={fillColor}
      />
    </svg>
  )
}
