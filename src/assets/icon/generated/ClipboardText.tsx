import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ClipboardText = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15.75 14.25A.75.75 0 0115 15H9a.75.75 0 110-1.5h6a.75.75 0 01.75.75zM15 10.5H9A.75.75 0 109 12h6a.75.75 0 100-1.5zm5.25-6v15.75a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V4.5A1.5 1.5 0 015.25 3h3.4a4.492 4.492 0 016.7 0h3.4a1.5 1.5 0 011.5 1.5zM9 6h6a3 3 0 00-6 0zm9.75-1.5h-2.508c.17.482.258.989.258 1.5v.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V6c0-.511.087-1.018.258-1.5H5.25v15.75h13.5V4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
