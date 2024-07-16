import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Camera = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 5.25h-2.599l-1.278-1.916A.749.749 0 0015 3H9a.75.75 0 00-.623.334L7.097 5.25H4.5A2.25 2.25 0 002.25 7.5V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V7.5a2.25 2.25 0 00-2.25-2.25zM20.25 18a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75h3a.75.75 0 00.624-.334L9.401 4.5h5.197l1.278 1.916a.75.75 0 00.624.334h3a.75.75 0 01.75.75V18zM12 8.25a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25zM12 15a2.625 2.625 0 110-5.25A2.625 2.625 0 0112 15z"
        fill={fillColor}
      />
    </svg>
  )
}
