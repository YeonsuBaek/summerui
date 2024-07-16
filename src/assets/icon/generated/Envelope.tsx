import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Envelope = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 4.5H3a.75.75 0 00-.75.75V18a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V5.25A.75.75 0 0021 4.5zm-9 7.983L4.928 6h14.144L12 12.483zM9.254 12L3.75 17.045V6.955L9.254 12zm1.11 1.017l1.125 1.036a.75.75 0 001.014 0l1.125-1.036L19.066 18H4.928l5.436-4.983zM14.746 12l5.504-5.046v10.092L14.746 12z"
        fill={fillColor}
      />
    </svg>
  )
}
