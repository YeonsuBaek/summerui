import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const CloudLightningFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.625 15.75h-2.2L11.075 18H13.5a.75.75 0 01.643 1.136l-2.25 3.75a.753.753 0 01-1.03.257.752.752 0 01-.256-1.03l1.568-2.613H9.75a.751.751 0 01-.643-1.136l1.568-2.614H7.207c-2.696 0-4.938-2.15-4.957-4.841a4.884 4.884 0 013.502-4.712.375.375 0 01.468.448A8.67 8.67 0 006 8.193.763.763 0 006.695 9h.056a.767.767 0 00.757-.724 7.125 7.125 0 117.117 7.474z"
        fill={fillColor}
      />
    </svg>
  )
}
