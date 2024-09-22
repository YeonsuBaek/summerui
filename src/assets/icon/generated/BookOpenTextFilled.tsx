import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const BookOpenTextFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.75 4.5h-6a3 3 0 00-3 3v8.225a.766.766 0 01-.7.773.75.75 0 01-.8-.75V7.5a3 3 0 00-3-3h-6a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75H9a2.25 2.25 0 012.25 2.244.74.74 0 00.48.708.75.75 0 001.02-.702A2.25 2.25 0 0115 19.5h6.75a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75zM19.5 15.75h-3.725a.766.766 0 01-.773-.7.75.75 0 01.75-.8h3.725a.766.766 0 01.773.7.749.749 0 01-.75.8zm0-3h-3.725a.766.766 0 01-.773-.7.75.75 0 01.75-.8h3.725a.766.766 0 01.773.7.749.749 0 01-.75.8zm0-3h-3.725a.766.766 0 01-.775-.7.749.749 0 01.75-.8h3.725a.766.766 0 01.775.7.749.749 0 01-.75.8z"
        fill={fillColor}
      />
    </svg>
  )
}
