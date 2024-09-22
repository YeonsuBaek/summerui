import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const DownloadFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 13.5v6a.75.75 0 01-.75.75H3.75A.75.75 0 013 19.5v-6a.75.75 0 111.5 0v5.25h15V13.5a.75.75 0 111.5 0zm-9.53.53a.747.747 0 001.06 0l3.75-3.75A.75.75 0 0015.75 9h-3V3a.75.75 0 10-1.5 0v6h-3a.75.75 0 00-.53 1.28l3.75 3.75z"
        fill={fillColor}
      />
    </svg>
  )
}
