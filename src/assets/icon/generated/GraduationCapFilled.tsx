import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const GraduationCapFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.5 19.429a11.159 11.159 0 001.5-.725V22.5a.75.75 0 11-1.5 0v-3.071zm1.103-8.29l-5.25-2.8a.75.75 0 00-.705 1.323L16.03 12l1.594-.85-.022-.012zm6-2.8l-11.25-6a.75.75 0 00-.705 0l-11.25 6a.75.75 0 000 1.323L3 11.05v4.54c0 .368.135.724.38.998C4.61 17.956 7.36 20.25 12 20.25a12.187 12.187 0 004.5-.821V12.25l-.469-.25-4.03 2.15-7.892-4.213L2.344 9 12 3.85 21.656 9l-1.76.938h-.006l-2.265 1.213a.75.75 0 01.375.65v6.903a10.838 10.838 0 002.62-2.116c.245-.274.38-.63.38-.998v-4.54l2.603-1.388a.75.75 0 000-1.324z"
        fill={fillColor}
      />
    </svg>
  )
}
