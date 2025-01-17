import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatSquareText = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.25 4.5H3.75A1.5 1.5 0 002.25 6v15a1.486 1.486 0 00.866 1.36 1.49 1.49 0 001.595-.214l.008-.007L7.781 19.5H20.25a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5zm0 13.5H7.5a.75.75 0 00-.49.183L3.75 21V6h16.5v12zm-12-7.5A.75.75 0 019 9.75h6a.75.75 0 110 1.5H9a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h6a.75.75 0 110 1.5H9a.75.75 0 01-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
