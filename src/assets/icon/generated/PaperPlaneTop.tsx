import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaperPlaneTop = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.303 18.76L13.298 3.016a1.5 1.5 0 00-2.614 0l-8.99 15.75A1.5 1.5 0 003.5 20.916l8.5-2.874 8.5 2.872a1.5 1.5 0 001.8-2.154h.003zm-1.317.734l-8.236-2.782V11.25a.75.75 0 10-1.5 0v5.462l-8.235 2.782L3 19.5l8.987-15.75L21 19.5l-.014-.006z"
        fill={fillColor}
      />
    </svg>
  )
}
