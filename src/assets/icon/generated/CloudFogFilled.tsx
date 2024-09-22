import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudFogFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.75 21.75a.75.75 0 01-.75.75H9.75a.75.75 0 010-1.5H15a.75.75 0 01.75.75zm-3.75-3a.75.75 0 00-.75-.75h-4.5a.75.75 0 100 1.5h4.5a.75.75 0 00.75-.75zm5.25-.75H15a.75.75 0 100 1.5h2.25a.75.75 0 000-1.5zm4.488-9.042a7.125 7.125 0 00-14.23.068.767.767 0 01-.758.724h-.056A.763.763 0 016 8.943c.026-.522.1-1.04.218-1.548a.375.375 0 00-.468-.448 4.883 4.883 0 00-3.5 4.712C2.269 14.35 4.511 16.5 7.204 16.5h7.421a7.132 7.132 0 007.113-7.542z"
        fill={fillColor}
      />
    </svg>
  )
}
