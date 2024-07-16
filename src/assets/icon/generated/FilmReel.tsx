import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FilmReel = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 20.25h-4.56a9.746 9.746 0 10-5.19 1.5h9.75a.75.75 0 100-1.5zM3.75 12A8.25 8.25 0 1112 20.25 8.26 8.26 0 013.75 12zM12 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-3a.75.75 0 110 1.5.75.75 0 010-1.5zm2.25 9.75a2.25 2.25 0 10-4.499 0 2.25 2.25 0 004.499 0zm-3 0a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm5.25-2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm0-3a.75.75 0 110 1.5.75.75 0 010-1.5zm-9-1.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0 3a.75.75 0 110-1.5.75.75 0 010 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
