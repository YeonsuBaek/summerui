import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CrosshairSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm.75 17.965V17.25a.75.75 0 10-1.5 0v2.965a8.262 8.262 0 01-7.465-7.465H6.75a.75.75 0 100-1.5H3.785a8.262 8.262 0 017.465-7.465V6.75a.75.75 0 101.5 0V3.785a8.262 8.262 0 017.465 7.465H17.25a.75.75 0 100 1.5h2.965a8.262 8.262 0 01-7.465 7.465z"
        fill={fillColor}
      />
    </svg>
  )
}
