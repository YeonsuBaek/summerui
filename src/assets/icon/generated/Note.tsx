import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Note = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M8.25 9A.75.75 0 019 8.25h6a.75.75 0 110 1.5H9A.75.75 0 018.25 9zM9 12.75h6a.75.75 0 100-1.5H9a.75.75 0 100 1.5zm3 1.5H9a.75.75 0 100 1.5h3a.75.75 0 100-1.5zm9-9.75v10.19a1.487 1.487 0 01-.44 1.06l-4.81 4.81a1.487 1.487 0 01-1.06.44H4.5A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3h15A1.5 1.5 0 0121 4.5zm-16.5 15h9.75V15a.75.75 0 01.75-.75h4.5V4.5h-15v15zm11.25-3.75v2.69l2.69-2.69h-2.69z"
        fill={fillColor}
      />
    </svg>
  )
}
