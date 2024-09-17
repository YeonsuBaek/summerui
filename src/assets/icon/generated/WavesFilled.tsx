import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const WavesFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={`${size / 16}rem`}
      height={`${size / 16}rem`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-1.012 13.582c-1.226 1.048-2.335 1.415-3.342 1.415-1.337 0-2.495-.649-3.513-1.219-1.725-.966-3.089-1.73-5.145.03a.75.75 0 11-.976-1.14c2.852-2.438 5.071-1.197 6.855-.198 1.725.966 3.093 1.73 5.145-.03a.75.75 0 01.976 1.14v.002zm0-4.125c-1.226 1.048-2.335 1.415-3.342 1.415-1.337 0-2.495-.649-3.513-1.219-1.725-.966-3.089-1.73-5.145.03a.75.75 0 01-.976-1.14c2.852-2.438 5.071-1.197 6.855-.198 1.725.966 3.093 1.73 5.145-.03a.751.751 0 01.976 1.14v.002zm0-4.125c-1.226 1.048-2.335 1.415-3.342 1.415-1.337 0-2.495-.649-3.513-1.219-1.725-.966-3.089-1.73-5.145.03a.75.75 0 01-.976-1.14c2.852-2.437 5.071-1.196 6.855-.197 1.725.966 3.093 1.73 5.145-.03a.75.75 0 01.976 1.14z"
        fill={fillColor}
      />
    </svg>
  )
}
