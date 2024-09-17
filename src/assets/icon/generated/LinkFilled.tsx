import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LinkFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-8.653 15.046a4.06 4.06 0 01-5.156-6.228L8.069 9.44a4.064 4.064 0 016.675 1.446.751.751 0 01-1.406.525 2.562 2.562 0 00-4.21-.911L6.75 12.878a2.561 2.561 0 003.251 3.93.752.752 0 011.07.178.751.751 0 01-.226 1.06h.002zm7.463-5.864l-2.378 2.378a4.032 4.032 0 01-2.87 1.19 4.064 4.064 0 01-3.8-2.636.75.75 0 011.406-.525 2.564 2.564 0 002.39 1.661 2.543 2.543 0 001.81-.75l2.382-2.378a2.562 2.562 0 00-3.251-3.93.751.751 0 11-.844-1.238 4.061 4.061 0 015.156 6.228z"
        fill={fillColor}
      />
    </svg>
  )
}
