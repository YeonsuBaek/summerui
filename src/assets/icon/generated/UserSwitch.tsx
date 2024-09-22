import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const UserSwitch = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.78 12.53l-2.25 2.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l.97.97V12A8.25 8.25 0 005.296 7.188a.75.75 0 11-1.219-.876A9.75 9.75 0 0121.75 12v.44l.97-.97a.75.75 0 111.06 1.06zm-3.86 5.157A9.75 9.75 0 012.25 12v-.44l-.97.97a.75.75 0 01-1.06-1.06l2.25-2.25a.75.75 0 011.06 0l2.25 2.25a.75.75 0 11-1.06 1.06l-.97-.97V12a8.214 8.214 0 002.085 5.476 7.468 7.468 0 013.38-2.695 4.5 4.5 0 115.57 0 7.462 7.462 0 013.382 2.698 8.4 8.4 0 00.535-.667.75.75 0 011.219.876l-.001-.001zM12 14.25a3 3 0 100-6 3 3 0 000 6zm0 6a8.269 8.269 0 005.055-1.734 6 6 0 00-10.11 0A8.21 8.21 0 0012 20.25z"
        fill={fillColor}
      />
    </svg>
  )
}
