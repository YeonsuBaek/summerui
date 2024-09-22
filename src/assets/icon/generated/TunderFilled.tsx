import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const TunderFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.048 11.762l-10.5 11.25a.75.75 0 01-1.283-.656l1.374-6.875-5.402-2.029a.75.75 0 01-.282-1.219l10.5-11.25a.75.75 0 011.284.657L14.36 8.522l5.402 2.026a.75.75 0 01.282 1.214h.003z"
        fill={fillColor}
      />
    </svg>
  )
}
