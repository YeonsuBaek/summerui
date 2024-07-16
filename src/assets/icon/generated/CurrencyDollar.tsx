import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CurrencyDollar = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.25 11.25h-1.5v-6h.75a3 3 0 013 3 .75.75 0 101.5 0 4.504 4.504 0 00-4.5-4.5h-.75v-1.5a.75.75 0 10-1.5 0v1.5h-.75a4.5 4.5 0 000 9h.75v6h-1.5a3 3 0 01-3-3 .75.75 0 10-1.5 0 4.505 4.505 0 004.5 4.5h1.5v1.5a.75.75 0 101.5 0v-1.5h1.5a4.5 4.5 0 100-9zm-3.75 0a3 3 0 010-6h.75v6h-.75zm3.75 7.5h-1.5v-6h1.5a3 3 0 010 6z"
        fill={fillColor}
      />
    </svg>
  )
}
