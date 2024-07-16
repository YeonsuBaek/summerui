import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Funnel = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.619 4.643a1.483 1.483 0 00-1.369-.893H3.75a1.5 1.5 0 00-1.107 2.509l.007.008L9 13.047v7.203a1.5 1.5 0 002.332 1.249l3-2a1.5 1.5 0 00.668-1.25v-5.202l6.35-6.78.008-.008a1.48 1.48 0 00.26-1.616zm-7.915 7.599a.75.75 0 00-.204.508v5.5l-3 2v-7.5a.75.75 0 00-.203-.513L3.75 5.25h16.5l-6.546 6.992z"
        fill={fillColor}
      />
    </svg>
  )
}
