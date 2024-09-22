import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BirdFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.166 6.876l-2.178-1.452A5.624 5.624 0 0014.625 1.5h-.027C11.512 1.515 9 4.075 9 7.208V9.06l-7.91 9.492-.01.012A1.5 1.5 0 002.25 21h8.25a9.76 9.76 0 009.75-9.75V9.401l1.916-1.277a.75.75 0 000-1.248zm-10.34 5.604l-5.624 6.75a.749.749 0 01-1.333-.408.75.75 0 01.18-.552l5.625-6.75a.748.748 0 011.252.123.75.75 0 01-.1.837zm3.549-4.98a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
