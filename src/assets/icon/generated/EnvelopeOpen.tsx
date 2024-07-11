import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const EnvelopeOpen = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.416 8.376l-9-6a.75.75 0 00-.832 0l-9 6A.75.75 0 002.25 9v9.75a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V9a.749.749 0 00-.334-.624zM9.068 14.25L3.75 18v-7.544l5.318 3.794zm1.534.75h2.796l5.309 3.75H5.293l5.31-3.75zm4.33-.75l5.318-3.794V18l-5.318-3.75zM12 3.9l7.68 5.12-6.282 4.48h-2.794L4.323 9.02 12 3.9z"
        fill={fillColor}
      />
    </svg>
  )
}
