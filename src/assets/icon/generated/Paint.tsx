import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Paint = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.987 13.038a.75.75 0 00.294-1.241L11.453.969a.75.75 0 00-1.06 0L6.586 4.781 4.28 2.47a.75.75 0 00-1.06 1.062l2.306 2.306-4.12 4.116a2.25 2.25 0 000 3.182l7.959 7.959a2.25 2.25 0 003.182 0l7.358-7.359 2.082-.697zm-3.018-.491l-7.484 7.484a.75.75 0 01-1.06 0l-7.956-7.956a.75.75 0 010-1.06l4.117-4.118 2.73 2.73a2.625 2.625 0 101.06-1.061l-2.729-2.73 3.281-3.276L20.362 12l-1.1.366a.758.758 0 00-.293.18zm-8.14-2.467a1.243 1.243 0 11-.005.006l.005-.006zm11.545 5.25a.75.75 0 00-1.248 0c-.166.254-1.626 2.49-1.626 4.17a2.25 2.25 0 104.5 0c0-1.68-1.46-3.916-1.626-4.166v-.004zm-.624 4.92a.75.75 0 01-.75-.75c0-.637.375-1.53.75-2.258.375.728.75 1.626.75 2.258a.75.75 0 01-.75.75z"
        fill={fillColor}
      />
    </svg>
  )
}
