import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ShareFat = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M22.28 9.97l-7.5-7.5A.75.75 0 0013.5 3v3.783c-2.432.208-5.118 1.399-7.327 3.273-2.661 2.257-4.318 5.166-4.665 8.19a1.125 1.125 0 001.938.899c1.031-1.098 4.7-4.57 10.054-4.875V18a.75.75 0 001.28.53l7.5-7.5a.75.75 0 000-1.06zM15 16.19V13.5a.75.75 0 00-.75-.75c-2.633 0-5.197.687-7.62 2.044A18.388 18.388 0 003.2 17.28c.544-2.235 1.915-4.36 3.943-6.08 2.177-1.847 4.834-2.95 7.107-2.95A.75.75 0 0015 7.5V4.811l5.69 5.689L15 16.19z"
        fill={fillColor}
      />
    </svg>
  )
}
