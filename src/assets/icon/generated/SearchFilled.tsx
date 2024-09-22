import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SearchFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.75 10.5a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0zm5.78 11.03a.749.749 0 01-1.06 0l-4.694-4.694a8.25 8.25 0 111.061-1.06l4.694 4.693a.747.747 0 010 1.062zM10.5 17.25a6.75 6.75 0 10-6.75-6.75 6.758 6.758 0 006.75 6.75z"
        fill={fillColor}
      />
    </svg>
  )
}
