import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NotePencil = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.53 5.47l-3-3a.749.749 0 00-1.06 0l-9 9a.75.75 0 00-.22.53v3a.75.75 0 00.75.75h3a.75.75 0 00.53-.22l9-9a.748.748 0 000-1.06zm-9.84 8.78H9.75v-1.94l6-6 1.94 1.94-6 6zm7.06-7.06l-1.94-1.94L18 4.06 19.94 6l-1.19 1.19zM21 12v7.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3H12a.75.75 0 110 1.5H4.5v15h15V12a.75.75 0 111.5 0z"
        fill={fillColor}
      />
    </svg>
  )
}
