import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NoteBlank = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h10.19a1.487 1.487 0 001.06-.44l4.81-4.81a1.487 1.487 0 00.44-1.06V4.5A1.5 1.5 0 0019.5 3zm-15 1.5h15v9.75H15a.75.75 0 00-.75.75v4.5H4.5v-15zm13.94 11.25l-2.69 2.69v-2.69h2.69z"
        fill={fillColor}
      />
    </svg>
  )
}
