import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Highlighter = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.78 9.97a.749.749 0 00-1.06 0L18 14.69l-7.94-7.94 4.72-4.72A.75.75 0 1013.72.97L9 5.69a1.5 1.5 0 00-.264 1.763L6.75 9.44a1.5 1.5 0 000 2.12l.44.44-5.47 5.47a.75.75 0 00.293 1.242l6.75 2.25a.741.741 0 00.524-.019.75.75 0 00.244-.162l3.219-3.22.44.439a1.5 1.5 0 002.12 0l1.987-1.986a1.5 1.5 0 001.763-.264l4.72-4.72a.748.748 0 000-1.06zM8.798 19.391l-5.156-1.72L8.25 13.06l3.44 3.44-2.893 2.892zm5.453-2.452L7.81 10.5l1.94-1.94L16.19 15l-1.94 1.94z"
        fill={fillColor}
      />
    </svg>
  )
}
