import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SearchPlus = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.25 10.5a.75.75 0 01-.75.75h-2.25v2.25a.75.75 0 11-1.5 0v-2.25H7.5a.75.75 0 110-1.5h2.25V7.5a.75.75 0 011.5 0v2.25h2.25a.75.75 0 01.75.75zm7.28 11.03a.747.747 0 01-1.06 0l-4.694-4.693a8.26 8.26 0 111.06-1.06l4.695 4.692a.747.747 0 010 1.062zM10.5 17.25a6.75 6.75 0 10-6.75-6.75 6.758 6.758 0 006.75 6.75z"
        fill={fillColor}
      />
    </svg>
  )
}
