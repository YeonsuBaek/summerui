import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Paperclip = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.656 11.47a.747.747 0 010 1.06l-7.693 7.688a5.25 5.25 0 11-7.425-7.426l9.306-9.442a3.75 3.75 0 115.307 5.301l-9.307 9.443a2.254 2.254 0 11-3.188-3.188l7.81-7.933a.75.75 0 111.068 1.052l-7.81 7.941a.751.751 0 001.057 1.066l9.306-9.438a2.251 2.251 0 10-3.18-3.188l-9.304 9.439a3.75 3.75 0 105.3 5.308l7.692-7.687a.75.75 0 011.06.003z"
        fill={fillColor}
      />
    </svg>
  )
}
