import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Palette = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M18.822 5.052A9.682 9.682 0 0012 2.25h-.1A9.75 9.75 0 002.25 12c0 4.031 2.492 7.412 6.502 8.828A3 3 0 0012.75 18a1.5 1.5 0 011.5-1.5h4.332a2.982 2.982 0 002.925-2.332c.168-.739.25-1.494.243-2.25a9.685 9.685 0 00-2.928-6.866zm1.219 8.785A1.49 1.49 0 0118.582 15H14.25a3 3 0 00-3 3 1.5 1.5 0 01-1.998 1.413C5.858 18.216 3.75 15.375 3.75 12a8.25 8.25 0 018.165-8.25h.084a8.283 8.283 0 018.25 8.18 8.334 8.334 0 01-.204 1.908h-.004zm-6.916-6.712a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM9 9.375a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm0 5.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm8.25-5.25a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        fill={fillColor}
      />
    </svg>
  )
}
