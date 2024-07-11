import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Fish = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15.75 7.125a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm4.567 6.341c-1.815 3.272-5.197 5.04-10.053 5.26L8.2 23.546A.75.75 0 017.51 24h-.047a.75.75 0 01-.675-.542L5.4 18.6.544 17.21a.75.75 0 01-.094-1.411l4.82-2.063C5.49 8.881 7.258 5.5 10.528 3.683c2.32-1.288 4.944-1.485 6.739-1.423 1.747.06 3.375.4 3.643.563.11.064.2.156.265.265.159.267.5 1.895.563 3.642.064 1.791-.132 4.416-1.42 6.736zm-5.173 2.719a4.885 4.885 0 01-3.13-4.198 4.884 4.884 0 01-4.198-3.13c-.653 1.487-1.006 3.286-1.06 5.399a.75.75 0 01-.454.672l-3.318 1.42 3.23.924a.75.75 0 01.514.515l.923 3.229 1.421-3.319a.75.75 0 01.672-.453c2.111-.051 3.911-.404 5.4-1.059zm4.77-12.1c-1.326-.282-6.009-1.032-9.403 1.383-.561.4-1.066.876-1.5 1.412a3.375 3.375 0 003.69 3.604.75.75 0 01.818.819 3.376 3.376 0 003.606 3.688 7.58 7.58 0 001.407-1.5c2.414-3.391 1.664-8.078 1.382-9.406z"
        fill={fillColor}
      />
    </svg>
  )
}