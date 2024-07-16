import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CheckSquare = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M16.28 9.22a.748.748 0 010 1.06l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.749.749 0 011.06 0zM21 4.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3h15A1.5 1.5 0 0121 4.5zm-1.5 15v-15h-15v15h15z"
        fill={fillColor}
      />
    </svg>
  )
}
