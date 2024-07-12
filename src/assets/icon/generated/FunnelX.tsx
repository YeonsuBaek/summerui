import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FunnelX = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.358 6.259A1.5 1.5 0 0020.25 3.75H3.75a1.5 1.5 0 00-1.107 2.509l.007.008L9 13.047v7.203a1.5 1.5 0 002.332 1.249l3-2a1.501 1.501 0 00.668-1.25v-5.202l6.35-6.78.008-.008zm-7.653 5.984a.75.75 0 00-.205.507v5.5l-3 2v-7.5a.75.75 0 00-.203-.512L3.75 5.25h16.5l-6.545 6.993zm9.327 7.482a.75.75 0 01-1.06 1.061l-1.722-1.725-1.72 1.72a.75.75 0 11-1.06-1.06L19.19 18l-1.72-1.72a.75.75 0 011.06-1.06l1.72 1.72 1.72-1.72a.75.75 0 011.06 1.06L21.31 18l1.723 1.725z"
        fill={fillColor}
      />
    </svg>
  )
}
