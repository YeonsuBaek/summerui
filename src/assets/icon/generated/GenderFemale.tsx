import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const GenderFemale = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 9a7.5 7.5 0 10-8.25 7.462v2.288h-3a.75.75 0 100 1.5h3v2.25a.75.75 0 101.5 0v-2.25h3a.75.75 0 100-1.5h-3v-2.288A7.51 7.51 0 0019.5 9zM6 9a6 6 0 116 6 6.006 6.006 0 01-6-6z"
        fill={fillColor}
      />
    </svg>
  )
}
