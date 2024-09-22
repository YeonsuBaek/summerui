import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ClockCounterClockwiseFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21 12a9 9 0 01-15.177 6.546.75.75 0 011.031-1.092 7.5 7.5 0 10-.157-10.757c-.331.334-.643.663-.945.99L7.28 9.22A.75.75 0 016.75 10.5H3a.75.75 0 01-.75-.75V6a.75.75 0 011.28-.53l1.158 1.158c.301-.327.613-.656.943-.989A9 9 0 0121 12zm-9-5.25a.75.75 0 00-.75.75V12a.75.75 0 00.364.643l3.75 2.25a.749.749 0 00.989-1.09.752.752 0 00-.217-.196l-3.386-2.032V7.5a.75.75 0 00-.75-.75z"
        fill={fillColor}
      />
    </svg>
  )
}
