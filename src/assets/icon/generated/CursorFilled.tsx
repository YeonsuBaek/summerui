import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CursorFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.67 19.481l-1.189 1.19a1.127 1.127 0 01-1.594 0l-5.303-5.303-1.803 4.702-.012.03a1.485 1.485 0 01-1.37.9h-.073a1.483 1.483 0 01-1.35-1.031L3.074 4.96a1.495 1.495 0 011.886-1.886l15.008 4.9a1.5 1.5 0 01.132 2.794l-.031.012-4.703 1.807 5.304 5.302a1.125 1.125 0 010 1.591z"
        fill={fillColor}
      />
    </svg>
  )
}
