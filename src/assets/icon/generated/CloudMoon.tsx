import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudMoon = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.125 6.75c-.388 0-.776.031-1.159.094a6.743 6.743 0 00-5.2-5.922.75.75 0 00-.9.898A5.255 5.255 0 012.57 8.117a.75.75 0 00-.9.899 6.771 6.771 0 003.028 4.224A4.875 4.875 0 008.625 21h7.5a7.125 7.125 0 100-14.25zm-12.622 3h.247A6.758 6.758 0 0010.5 3v-.25a5.216 5.216 0 013 4.5 7.152 7.152 0 00-4.031 4.068 4.877 4.877 0 00-3.657.831A5.27 5.27 0 013.503 9.75zm12.622 9.75h-7.5a3.374 3.374 0 11.448-6.721c-.035.222-.059.45-.072.678a.751.751 0 101.5.086c.021-.374.08-.745.176-1.107 0-.015.009-.03.011-.045a5.631 5.631 0 115.437 7.109z"
        fill={fillColor}
      />
    </svg>
  )
}
