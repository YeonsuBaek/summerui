import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const GenderMale = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 3h-4.5a.75.75 0 100 1.5h2.69l-3.944 3.944a7.5 7.5 0 101.06 1.06L19.5 5.561V8.25a.75.75 0 101.5 0v-4.5a.75.75 0 00-.75-.75zm-6.259 15.496a6 6 0 110-8.487 6.01 6.01 0 010 8.487z"
        fill={fillColor}
      />
    </svg>
  )
}
