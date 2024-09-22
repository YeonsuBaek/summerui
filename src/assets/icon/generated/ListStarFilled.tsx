import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ListStarFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM6 6.75h12a.75.75 0 110 1.5H6a.75.75 0 010-1.5zm0 4.5h3a.75.75 0 110 1.5H6a.75.75 0 110-1.5zm3.75 6H6a.75.75 0 110-1.5h3.75a.75.75 0 110 1.5zm8.864-3.817l-1.674 1.38.51 2.062a.376.376 0 01-.364.465.375.375 0 01-.188-.052L15 16.176l-1.896 1.116a.376.376 0 01-.554-.413l.51-2.063-1.674-1.383a.375.375 0 01.21-.662l2.21-.171.85-1.969a.375.375 0 01.688 0l.85 1.969 2.21.17a.375.375 0 01.21.663z"
        fill={fillColor}
      />
    </svg>
  )
}
