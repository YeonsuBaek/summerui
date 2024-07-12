import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ForkKnife = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M6.75 8.25v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0zm13.5-4.5V21a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 01-.75-.75c.035-1.797.262-3.584.677-5.332.917-3.796 2.655-6.34 5.028-7.357a.75.75 0 011.045.689zm-1.5 1.303c-3.016 2.304-3.607 7.914-3.722 9.947h3.722V5.053zm-7.51-1.426a.749.749 0 10-1.48.247l.74 4.435a3 3 0 01-6 0l.739-4.435a.75.75 0 10-1.48-.247l-.75 4.5A.766.766 0 003 8.25a4.507 4.507 0 003.75 4.436V21a.75.75 0 001.5 0v-8.314A4.506 4.506 0 0012 8.25a.766.766 0 00-.01-.123l-.75-4.5z"
        fill={fillColor}
      />
    </svg>
  )
}
