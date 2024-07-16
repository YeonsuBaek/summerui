import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LinkSimpleBreak = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 7.5a5.22 5.22 0 01-1.538 3.713l-2.819 2.818a.75.75 0 11-1.06-1.062l2.82-2.818a3.75 3.75 0 10-5.304-5.302L11.03 7.666a.75.75 0 11-1.062-1.061l2.819-2.817A5.25 5.25 0 0121.75 7.5zm-8.78 8.833l-2.819 2.818a3.749 3.749 0 11-5.302-5.303l2.817-2.817a.75.75 0 10-1.061-1.062l-2.818 2.819a5.25 5.25 0 007.426 7.424l2.818-2.819a.75.75 0 00-1.062-1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
