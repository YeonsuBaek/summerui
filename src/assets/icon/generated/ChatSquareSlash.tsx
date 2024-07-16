import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatSquareSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M5.055 3.246a.75.75 0 10-1.11 1.008l.223.246H3.75A1.5 1.5 0 002.25 6v15a1.486 1.486 0 00.866 1.36 1.494 1.494 0 001.596-.214l.007-.007L7.781 19.5h10.024l1.14 1.254a.75.75 0 101.11-1.008l-15-16.5zM7.5 18a.75.75 0 00-.49.183L3.75 21V6h1.781l10.91 12H7.5zM21.75 6v11.438a.75.75 0 11-1.5 0V6H9.918a.75.75 0 110-1.5H20.25a1.5 1.5 0 011.5 1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
