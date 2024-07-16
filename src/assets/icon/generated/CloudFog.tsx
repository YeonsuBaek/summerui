import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudFog = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M11.25 19.5h-4.5a.75.75 0 110-1.5h4.5a.75.75 0 110 1.5zm6-1.5H15a.75.75 0 100 1.5h2.25a.75.75 0 100-1.5zM15 21H9.75a.75.75 0 100 1.5H15a.75.75 0 100-1.5zm6.75-11.625a7.133 7.133 0 01-7.125 7.125h-7.5a4.875 4.875 0 11.836-9.679A7.132 7.132 0 0121.75 9.375zm-1.5 0A5.63 5.63 0 009 9.043a.751.751 0 11-1.5-.086c.013-.229.037-.455.072-.678A3.375 3.375 0 107.125 15h7.5a5.632 5.632 0 005.625-5.624z"
        fill={fillColor}
      />
    </svg>
  )
}
