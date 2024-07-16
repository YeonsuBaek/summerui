import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Bulb = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.5 21.75a.75.75 0 01-.75.75h-7.5a.75.75 0 110-1.5h7.5a.75.75 0 01.75.75zm3.75-12a8.208 8.208 0 01-3.154 6.488 1.522 1.522 0 00-.596 1.2V18a1.5 1.5 0 01-1.5 1.5H9A1.5 1.5 0 017.5 18v-.563a1.5 1.5 0 00-.584-1.186A8.21 8.21 0 013.75 9.796c-.024-4.468 3.587-8.19 8.051-8.296a8.25 8.25 0 018.449 8.25zm-1.5 0A6.749 6.749 0 0011.837 3C8.18 3.086 5.23 6.13 5.25 9.787a6.717 6.717 0 002.591 5.278A3 3 0 019 17.438V18h6v-.563a3.014 3.014 0 011.17-2.376 6.718 6.718 0 002.58-5.311zm-1.51-.876a5.4 5.4 0 00-4.365-4.364.75.75 0 10-.25 1.48c1.554.261 2.872 1.58 3.135 3.136a.75.75 0 001.48-.252z"
        fill={fillColor}
      />
    </svg>
  )
}
