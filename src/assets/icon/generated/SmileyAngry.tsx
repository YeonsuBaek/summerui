import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SmileyAngry = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M8.625 14.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm6.75-2.25a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm6.375 0A9.75 9.75 0 1112 2.25 9.76 9.76 0 0121.75 12zm-1.5 0A8.25 8.25 0 1012 20.25 8.26 8.26 0 0020.25 12zm-4.166-4.374L12 10.349 7.916 7.63a.75.75 0 00-.832 1.25l4.5 3a.75.75 0 00.832 0l4.5-3a.75.75 0 00-.832-1.25v-.004zm-1.419 9c-.79-.526-1.546-.876-2.665-.876-1.12 0-1.875.35-2.665.876a.75.75 0 00.83 1.248c.61-.405 1.085-.624 1.835-.624s1.225.22 1.835.624a.75.75 0 10.83-1.248z"
        fill={fillColor}
      />
    </svg>
  )
}
