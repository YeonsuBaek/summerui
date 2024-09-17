import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Handshake = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M23.84 10.117L21.449 5.33a1.5 1.5 0 00-2.013-.67l-2.331 1.165-4.912-1.3a.763.763 0 00-.384 0l-4.912 1.3-2.331-1.166a1.5 1.5 0 00-2.013.67L.159 10.117a1.5 1.5 0 00.67 2.013l2.532 1.266 5.202 3.715a.754.754 0 00.254.117l6 1.5a.75.75 0 00.713-.196l5.162-5.164 2.477-1.239a1.5 1.5 0 00.67-2.011h.002zm-5.145 3.128l-3.226-2.584a.75.75 0 00-1.002.058c-1.67 1.681-3.53 1.469-4.717.719L13.804 7.5h2.982l2.55 5.101-.641.644zM3.893 6l1.92.958-2.398 4.786-1.915-.957L3.893 6zm10.875 11.169l-5.447-1.362-4.613-3.294 2.625-5.25L12 6.026l.919.243L8.7 10.364l-.008.008a1.5 1.5 0 00.255 2.326c1.928 1.231 4.254 1.032 6.086-.468l2.592 2.082-2.857 2.857zm5.813-5.426l-2.393-4.781L20.107 6l2.393 4.787-1.92.956zm-8.227 8.688a.75.75 0 01-.909.546L7.538 20a.738.738 0 01-.254-.117l-2.47-1.765a.75.75 0 01.872-1.219l2.354 1.682 3.773.942a.75.75 0 01.545.909l-.004-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
