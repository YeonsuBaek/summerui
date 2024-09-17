import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudMoonFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.125 6.75c-.388 0-.776.031-1.159.094a6.743 6.743 0 00-5.2-5.922.75.75 0 00-.9.898A5.255 5.255 0 012.57 8.117a.75.75 0 00-.9.899 6.77 6.77 0 003.028 4.224A4.875 4.875 0 008.625 21h7.5a7.125 7.125 0 100-14.25zm-12.622 3h.247A6.758 6.758 0 0010.5 3v-.25a5.216 5.216 0 013 4.504 7.162 7.162 0 00-4.031 4.07 4.846 4.846 0 00-3.656.826 5.271 5.271 0 01-2.31-2.4z"
        fill={fillColor}
      />
    </svg>
  )
}
