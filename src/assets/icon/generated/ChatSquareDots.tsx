import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatSquareDots = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm-3 1.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm8.25 0a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM21.75 6v12a1.5 1.5 0 01-1.5 1.5H7.781l-3.056 2.64-.008.007a1.49 1.49 0 01-1.605.21A1.486 1.486 0 012.25 21V6a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5zm-1.5 0H3.75v15l3.26-2.813A.75.75 0 017.5 18h12.75V6z"
        fill={fillColor}
      />
    </svg>
  )
}
