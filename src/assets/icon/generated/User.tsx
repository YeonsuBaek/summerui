import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const User = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.649 19.875c-1.428-2.468-3.628-4.238-6.196-5.077a6.75 6.75 0 10-6.906 0c-2.568.838-4.768 2.608-6.196 5.077a.75.75 0 101.299.75C5.416 17.573 8.538 15.75 12 15.75c3.462 0 6.584 1.823 8.35 4.875a.75.75 0 101.299-.75zM6.75 9a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z"
        fill={fillColor}
      />
    </svg>
  )
}
