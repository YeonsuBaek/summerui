import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretCircleUpDownFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm3.53 12.53l-3 3a.747.747 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06L12 16.19l2.47-2.47a.75.75 0 111.06 1.06zm0-4.5a.747.747 0 01-1.06 0L12 7.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3-3a.75.75 0 011.06 0l3 3a.748.748 0 010 1.06z"
        fill={fillColor}
      />
    </svg>
  )
}