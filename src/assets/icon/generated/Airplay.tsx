import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Airplay = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12.57 14.512a.75.75 0 00-1.14 0l-4.5 5.25A.75.75 0 007.5 21h9a.75.75 0 00.57-1.238l-4.5-5.25zM9.13 19.5L12 16.152l2.87 3.348H9.13zM21.75 6v10.5a2.25 2.25 0 01-2.25 2.25h-.75a.75.75 0 110-1.5h.75a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v10.5a.75.75 0 00.75.75h.75a.75.75 0 110 1.5H4.5a2.25 2.25 0 01-2.25-2.25V6A2.25 2.25 0 014.5 3.75h15A2.25 2.25 0 0121.75 6z"
        fill={fillColor}
      />
    </svg>
  )
}
