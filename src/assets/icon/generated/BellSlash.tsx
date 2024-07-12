import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BellSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M5.055 3.246a.75.75 0 10-1.11 1.008l1.57 1.727A7.462 7.462 0 004.5 9.75c0 3.313-.774 5.848-1.295 6.744A1.5 1.5 0 004.5 18.75h3.825a3.75 3.75 0 007.35 0h1.447l1.823 2.004a.75.75 0 101.11-1.008l-15-16.5zM12 20.25a2.25 2.25 0 01-2.12-1.5h4.24a2.25 2.25 0 01-2.12 1.5zm-7.5-3c.722-1.241 1.5-4.117 1.5-7.5-.001-.896.2-1.781.587-2.59l9.171 10.09H4.5zm15.563-.443a.75.75 0 01-.972-.425C18.407 14.642 18 12.164 18 9.75a6 6 0 00-8.96-5.22.75.75 0 01-.74-1.305A7.5 7.5 0 0119.5 9.75c0 3.314.755 5.493.986 6.082a.75.75 0 01-.424.973v.002z"
        fill={fillColor}
      />
    </svg>
  )
}
