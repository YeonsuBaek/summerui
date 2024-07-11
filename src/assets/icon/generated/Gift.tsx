import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Gift = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.25 6.75h-3.289c.037-.031.074-.061.11-.094A2.768 2.768 0 0018 4.647 3.057 3.057 0 0014.854 1.5a2.768 2.768 0 00-2.01.929A5.15 5.15 0 0012 3.787a5.15 5.15 0 00-.844-1.358 2.768 2.768 0 00-2.01-.929A3.058 3.058 0 006 4.647a2.768 2.768 0 00.93 2.01c.035.03.072.06.109.093H3.75a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5v6a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5zm-6.281-3.327A1.283 1.283 0 0114.906 3h.046A1.559 1.559 0 0116.5 4.6a1.283 1.283 0 01-.422.938c-.89.787-2.366 1.065-3.281 1.162.112-.993.422-2.435 1.172-3.278zm-6.009.034A1.56 1.56 0 019.055 3h.046a1.284 1.284 0 01.938.422c.786.889 1.064 2.362 1.161 3.274-.91-.094-2.385-.375-3.273-1.162a1.283 1.283 0 01-.422-.937 1.556 1.556 0 01.452-1.14h.003zM3.75 8.25h7.5v3h-7.5v-3zm1.5 4.5h6v6h-6v-6zm13.5 6h-6v-6h6v6zm1.5-7.5h-7.5v-3h7.5v3z"
        fill={fillColor}
      />
    </svg>
  )
}