import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Eyeglasses = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18.75 3.75a.75.75 0 100 1.5 1.5 1.5 0 011.5 1.5v5.445a4.125 4.125 0 00-6.592 2.055h-3.316a4.125 4.125 0 00-6.592-2.055V6.75a1.5 1.5 0 011.5-1.5.75.75 0 000-1.5 3 3 0 00-3 3v8.625a4.125 4.125 0 008.232.375h3.036a4.125 4.125 0 008.232-.375V6.75a3 3 0 00-3-3zM6.375 18a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25zm11.25 0a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z"
        fill={fillColor}
      />
    </svg>
  )
}
