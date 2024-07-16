import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Key = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.303 3.697a7.5 7.5 0 00-12.436 7.626L2.69 16.5a1.485 1.485 0 00-.44 1.06v2.69a1.5 1.5 0 001.5 1.5h3A.75.75 0 007.5 21v-1.5H9a.75.75 0 00.75-.75v-1.5h1.5a.752.752 0 00.53-.22l.897-.896c.75.244 1.534.367 2.323.366h.01a7.5 7.5 0 005.293-12.803zm.697 5.5c-.102 3.196-2.79 5.8-5.99 5.803H15a5.974 5.974 0 01-2.217-.423.75.75 0 00-.829.158L10.94 15.75H9a.75.75 0 00-.75.75V18h-1.5a.75.75 0 00-.75.75v1.5H3.75v-2.69l5.515-5.514a.75.75 0 00.158-.829A5.973 5.973 0 019 8.993c0-3.201 2.607-5.888 5.803-5.99A6 6 0 0121 9.197zm-3-2.072a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
