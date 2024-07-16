import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Flag = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M4.009 4.688a.75.75 0 00-.259.562V21a.75.75 0 101.5 0v-4.147c2.512-1.983 4.675-.914 7.167.32 1.538.76 3.193 1.58 4.969 1.58 1.306 0 2.676-.445 4.108-1.688a.75.75 0 00.259-.562V5.25a.75.75 0 00-1.244-.562c-2.625 2.271-4.849 1.17-7.426-.105-2.67-1.324-5.697-2.821-9.074.105zm16.241 11.46c-2.512 1.984-4.675.914-7.167-.32-2.344-1.157-4.951-2.449-7.833-.787V5.605c2.512-1.983 4.675-.914 7.167.32 2.344 1.157 4.952 2.449 7.833.787v9.436z"
        fill={fillColor}
      />
    </svg>
  )
}
