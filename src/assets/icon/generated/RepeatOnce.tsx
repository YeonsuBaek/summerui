import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const RepeatOnce = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M2.25 12A6.758 6.758 0 019 5.25h10.19l-.97-.97a.75.75 0 111.06-1.06l2.25 2.25a.748.748 0 010 1.06l-2.25 2.25a.75.75 0 11-1.06-1.06l.97-.97H9A5.256 5.256 0 003.75 12a.75.75 0 11-1.5 0zM21 11.25a.75.75 0 00-.75.75A5.256 5.256 0 0115 17.25H4.81l.97-.97a.75.75 0 00-1.06-1.06l-2.25 2.25a.749.749 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06l-.97-.97H15A6.758 6.758 0 0021.75 12a.75.75 0 00-.75-.75zM12.75 15a.75.75 0 00.75-.75v-4.5a.75.75 0 00-1.086-.671l-1.5.75a.75.75 0 10.672 1.341l.414-.207v3.287a.75.75 0 00.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
