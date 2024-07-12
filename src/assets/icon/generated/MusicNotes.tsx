import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MusicNotes = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M19.961 1.658a.75.75 0 00-.643-.135l-12 3a.75.75 0 00-.568.727v10.32a3.375 3.375 0 101.5 2.805v-8.04l10.5-2.624v4.859a3.375 3.375 0 101.5 2.805V2.25a.75.75 0 00-.289-.592zM4.875 20.25a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75zM8.25 8.79V5.835l10.5-2.625v2.953L8.25 8.79zm8.625 8.46a1.875 1.875 0 110-3.751 1.875 1.875 0 010 3.751z"
        fill={fillColor}
      />
    </svg>
  )
}
