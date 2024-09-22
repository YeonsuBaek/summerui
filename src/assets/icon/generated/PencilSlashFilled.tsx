import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PencilSlashFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.311 6.878l-4.19-4.188a1.5 1.5 0 00-2.121 0l-4.159 4.158a.375.375 0 00-.013.518l5.506 6.056a.375.375 0 00.543.012L21.31 9a1.5 1.5 0 000-2.122zM18 10.19L13.811 6l2.25-2.25 4.189 4.19L18 10.19zm2.055 9.556a.751.751 0 11-1.11 1.008l-4.47-4.918L9.75 20.56a1.487 1.487 0 01-1.06.44H4.5A1.5 1.5 0 013 19.5v-4.19a1.49 1.49 0 01.439-1.06l5.025-5.025-4.5-4.952a.767.767 0 01-.035-1.008.75.75 0 011.125-.02l15.001 16.5z"
        fill={fillColor}
      />
    </svg>
  )
}
