import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const FolderOpen = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M22.969 10.373a1.501 1.501 0 00-1.219-.623h-1.5v-1.5a1.5 1.5 0 00-1.5-1.5h-6.5L9.65 4.8c-.26-.194-.575-.3-.9-.3h-5A1.5 1.5 0 002.25 6v13.5a.75.75 0 00.75.75h16.79a.75.75 0 00.712-.513l2.671-8.013a1.505 1.505 0 00-.204-1.351zM8.75 6l2.799 2.1a.75.75 0 00.45.15h6.75v1.5H6.54a1.5 1.5 0 00-1.422 1.026L3.75 14.878V6h5zm10.5 12.75H4.04l2.5-7.5H21.75l-2.5 7.5z"
        fill={fillColor}
      />
    </svg>
  )
}
