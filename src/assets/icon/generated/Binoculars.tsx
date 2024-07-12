import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Binoculars = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.238 14.238a4.41 4.41 0 00-.22-.511l-3.9-8.87a.734.734 0 00-.155-.23 3 3 0 00-4.244 0 .75.75 0 00-.219.53V7.5h-3V5.156a.75.75 0 00-.22-.53 3 3 0 00-4.242 0 .733.733 0 00-.156.228l-3.9 8.871A4.5 4.5 0 1010.5 15.75V9h3.001v6.75a4.5 4.5 0 108.738-1.512zM7.192 5.602A1.5 1.5 0 019 5.508v6.891a4.49 4.49 0 00-4.387-.93l2.579-5.867zM6 18.75a3 3 0 110-6 3 3 0 010 6zm9-13.243a1.5 1.5 0 011.808.094l2.579 5.866a4.492 4.492 0 00-4.387.931V5.507zm3 13.243a3 3 0 110-5.999 3 3 0 010 5.999z"
        fill={fillColor}
      />
    </svg>
  )
}
