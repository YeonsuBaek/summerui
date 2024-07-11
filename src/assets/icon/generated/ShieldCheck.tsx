import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ShieldCheck = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.5 3.75h-15A1.5 1.5 0 003 5.25v5.25c0 4.943 2.393 7.938 4.4 9.58 2.162 1.768 4.312 2.368 4.406 2.394a.752.752 0 00.394 0c.093-.026 2.241-.626 4.406-2.394C18.608 18.438 21 15.443 21 10.5V5.25a1.5 1.5 0 00-1.5-1.5zm0 6.75c0 3.475-1.28 6.296-3.806 8.383A12.12 12.12 0 0112 20.964a12.024 12.024 0 01-3.649-2.044C5.796 16.83 4.5 13.997 4.5 10.5V5.25h15v5.25zM7.72 13.28a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 011.06 1.06l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25z"
        fill={fillColor}
      />
    </svg>
  )
}
