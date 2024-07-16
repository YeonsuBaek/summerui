import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const QuestionMark = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18 9c0 2.673-2.294 4.885-5.25 5.209V15a.75.75 0 11-1.5 0v-1.5a.75.75 0 01.75-.75c2.482 0 4.5-1.682 4.5-3.75S14.482 5.25 12 5.25 7.5 6.932 7.5 9A.75.75 0 016 9c0-2.895 2.692-5.25 6-5.25S18 6.105 18 9zm-6 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill={fillColor}
      />
    </svg>
  )
}
