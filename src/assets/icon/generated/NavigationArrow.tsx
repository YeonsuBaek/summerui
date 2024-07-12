import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const NavigationArrow = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.25 9.957L5.757 3.844l-.015-.005A1.5 1.5 0 003.84 5.757L9.957 22.25a1.479 1.479 0 001.413 1h.028a1.478 1.478 0 001.406-1.058l.006-.02 2.047-7.312 7.313-2.047.019-.006a1.5 1.5 0 00.058-2.848l.003-.002zm-8.203 3.571a.75.75 0 00-.519.52l-2.156 7.702-.006-.016L5.25 5.25l16.483 6.114.015.006-7.7 2.158z"
        fill={fillColor}
      />
    </svg>
  )
}
