import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowFatRight = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.28 11.47l-9-9A.75.75 0 0012 3v3.75H4.5A1.5 1.5 0 003 8.25v7.5a1.5 1.5 0 001.5 1.5H12V21a.75.75 0 001.28.53l9-9a.747.747 0 000-1.06zm-8.78 7.72V16.5a.75.75 0 00-.75-.75H4.5v-7.5h8.25a.75.75 0 00.75-.75V4.81L20.69 12l-7.19 7.19z"
        fill={fillColor}
      />
    </svg>
  )
}
