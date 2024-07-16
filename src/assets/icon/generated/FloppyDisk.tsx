import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FloppyDisk = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.56 6.75l-3.31-3.31A1.487 1.487 0 0016.19 3H4.5A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V7.81a1.487 1.487 0 00-.44-1.06zM15.75 19.5h-7.5v-5.25h7.5v5.25zm3.75 0h-2.25v-5.25a1.5 1.5 0 00-1.5-1.5h-7.5a1.5 1.5 0 00-1.5 1.5v5.25H4.5v-15h11.69l3.31 3.31V19.5zM15 6.75a.75.75 0 01-.75.75H9A.75.75 0 019 6h5.25a.75.75 0 01.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
