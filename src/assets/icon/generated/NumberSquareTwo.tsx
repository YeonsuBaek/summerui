import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NumberSquareTwo = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm0 16.5h-15v-15h15v15zm-4.5-3a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.6-1.2l4.047-5.396a1.498 1.498 0 00-.488-2.221 1.5 1.5 0 00-2.124.815.75.75 0 01-1.414-.501 3 3 0 115.225 2.806L11.25 15.75h3a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
