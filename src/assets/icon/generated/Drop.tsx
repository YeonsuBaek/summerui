import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Drop = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M16.313 4.477A23.832 23.832 0 0012.427.886a.75.75 0 00-.861 0 23.832 23.832 0 00-3.879 3.59C5.11 7.437 3.75 10.557 3.75 13.5a8.25 8.25 0 1016.5 0c0-2.944-1.36-6.064-3.938-9.023zM12 20.25a6.757 6.757 0 01-6.75-6.75c0-5.365 5.2-9.844 6.75-11.062 1.55 1.218 6.75 5.695 6.75 11.062A6.758 6.758 0 0112 20.25zm5.24-5.874a5.4 5.4 0 01-4.365 4.364.75.75 0 11-.248-1.48c1.553-.261 2.87-1.58 3.134-3.136a.75.75 0 011.48.252h-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
