import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TreeFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 17.61c.24.161.491.306.75.434v3.706a.75.75 0 01-1.5 0v-3.706c.259-.128.51-.273.75-.433zm6.572-11.742a7.125 7.125 0 00-13.144 0A6.723 6.723 0 001.5 11.98c-.01 3.582 3 6.675 6.576 6.769 1.1.026 2.189-.216 3.174-.706v-3.33L7.164 12.67a.75.75 0 11.672-1.342l3.414 1.708V8.25a.75.75 0 111.5 0v2.537l3.414-1.708a.75.75 0 11.672 1.342l-4.086 2.042v5.581a6.766 6.766 0 003 .706h.17c3.58-.094 6.59-3.188 6.58-6.769a6.723 6.723 0 00-3.928-6.113z"
        fill={fillColor}
      />
    </svg>
  )
}
