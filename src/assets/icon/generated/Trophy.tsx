import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Trophy = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 6H19.5V4.5a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75V6H2.25a1.5 1.5 0 00-1.5 1.5V9a3.75 3.75 0 003.75 3.75h.342a7.512 7.512 0 006.408 5.213v2.287H9a.75.75 0 100 1.5h6a.75.75 0 100-1.5h-2.25v-2.29c2.994-.302 5.479-2.403 6.383-5.21h.367A3.75 3.75 0 0023.25 9V7.5a1.5 1.5 0 00-1.5-1.5zM4.5 11.25A2.25 2.25 0 012.25 9V7.5H4.5v3c0 .25.012.5.037.75H4.5zm13.5-.834c0 3.33-2.719 6.06-6 6.084a6 6 0 01-6-6V5.25h12v5.166zM21.75 9a2.25 2.25 0 01-2.25 2.25h-.047c.03-.277.047-.556.047-.834V7.5h2.25V9z"
        fill={fillColor}
      />
    </svg>
  )
}
