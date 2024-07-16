import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CurrencyCircleDollar = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm3.75-6.375a2.625 2.625 0 01-2.625 2.625h-.375v.75a.75.75 0 11-1.5 0v-.75h-1.5a.75.75 0 110-1.5h3.375a1.125 1.125 0 100-2.25h-2.25a2.625 2.625 0 010-5.25h.375v-.75a.75.75 0 111.5 0v.75h1.5a.75.75 0 110 1.5h-3.375a1.125 1.125 0 000 2.25h2.25a2.625 2.625 0 012.625 2.625z"
        fill={fillColor}
      />
    </svg>
  )
}
