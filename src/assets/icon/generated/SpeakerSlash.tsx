import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const SpeakerSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M5.055 3.246a.75.75 0 10-1.11 1.008L6.895 7.5H3A1.5 1.5 0 001.5 9v6A1.5 1.5 0 003 16.5h4.242l6.548 5.092A.75.75 0 0015 21v-4.585l3.945 4.34a.752.752 0 001.066.057.75.75 0 00.044-1.066l-15-16.5zM3 9h3.75v6H3V9zm10.5 10.466l-5.25-4.083V8.99l5.25 5.775v4.701zm3.938-5.978a2.25 2.25 0 000-2.974.75.75 0 111.125-.99 3.75 3.75 0 010 4.957.75.75 0 11-1.125-.993zM9.922 6.363a.75.75 0 01.13-1.053l3.737-2.906A.75.75 0 0115 3v7.015a.75.75 0 11-1.5 0V4.534l-2.526 1.969a.75.75 0 01-1.052-.136v-.004zM23.25 12a7.49 7.49 0 01-1.91 5 .75.75 0 01-1.117-1 6 6 0 000-8 .751.751 0 111.117-1 7.484 7.484 0 011.91 5z"
        fill={fillColor}
      />
    </svg>
  )
}
