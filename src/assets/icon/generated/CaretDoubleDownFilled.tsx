import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CaretDoubleDownFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.193 12.463a.75.75 0 01-.162.818l-7.5 7.5a.747.747 0 01-1.062 0l-7.5-7.5A.75.75 0 014.5 12h5.69L3.97 5.78A.75.75 0 014.5 4.5h15a.75.75 0 01.53 1.28L13.81 12h5.69a.75.75 0 01.693.463z"
        fill={fillColor}
      />
    </svg>
  )
}
