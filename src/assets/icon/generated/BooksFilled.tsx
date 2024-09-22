import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BooksFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.717 18.24L18.606 3.444a1.5 1.5 0 00-1.782-1.161l-4.388.943a1.508 1.508 0 00-1.153 1.781l3.111 14.794a1.5 1.5 0 001.782 1.164l4.388-.943a1.508 1.508 0 001.153-1.784zM12.75 4.701v-.009l4.387-.937.313 1.487-4.388.944-.312-1.485zm.938 4.441l-.315-1.49 4.39-.943.313 1.49-4.389.943zm6.562 9.414l-4.387.937-.313-1.487 4.388-.945.312 1.486v.009zM9.75 3h-4.5a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 009.75 3zm-4.5 1.5h4.5V6h-4.5V4.5zm4.5 15h-4.5V18h4.5v1.5z"
        fill={fillColor}
      />
    </svg>
  )
}
