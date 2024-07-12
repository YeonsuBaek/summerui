import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Umbrella = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.5 11.872A10.54 10.54 0 004.852 5.039a10.459 10.459 0 00-3.347 6.833A1.5 1.5 0 003 13.5h8.25v5.25a3 3 0 006 0 .75.75 0 10-1.5 0 1.5 1.5 0 11-3 0V13.5H21a1.499 1.499 0 001.5-1.628zM3 12a9.014 9.014 0 017.144-8.052C9.045 5.438 7.674 8.073 7.516 12H3zm6.014 0c.13-2.885.987-4.95 1.716-6.21A9.98 9.98 0 0112 4.046c.484.534.91 1.119 1.268 1.744 1.244 2.15 1.638 4.455 1.715 6.21H9.014zm7.467 0c-.157-3.927-1.529-6.562-2.625-8.057A9.006 9.006 0 0121 12h-4.519z"
        fill={fillColor}
      />
    </svg>
  )
}
