import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ArrowsVerticalFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M15.693 18.463a.75.75 0 01-.162.818l-3 3a.747.747 0 01-1.062 0l-3-3A.75.75 0 019 18h2.25V6H9a.75.75 0 01-.53-1.28l3-3a.75.75 0 011.06 0l3 3A.75.75 0 0115 6h-2.25v12H15a.75.75 0 01.693.463z"
        fill={fillColor}
      />
    </svg>
  )
}
