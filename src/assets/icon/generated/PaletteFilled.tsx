import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PaletteFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18.822 5.052A9.682 9.682 0 0012 2.25h-.1A9.75 9.75 0 002.25 12c0 4.031 2.492 7.412 6.502 8.828A3 3 0 0012.75 18a1.5 1.5 0 011.5-1.5h4.332a2.982 2.982 0 002.925-2.332c.168-.739.25-1.494.243-2.25a9.685 9.685 0 00-2.928-6.866zM7.875 15.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm0-5.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM12 8.25A1.125 1.125 0 1112 6a1.125 1.125 0 010 2.25zm4.125 2.25a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
