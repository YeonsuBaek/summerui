import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MedalMilitary = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19.406 3.75H4.594A1.594 1.594 0 003 5.344v4.613a1.594 1.594 0 00.938 1.45l5.868 2.668a4.5 4.5 0 104.395 0l5.861-2.667A1.594 1.594 0 0021 9.958V5.343a1.594 1.594 0 00-1.594-1.594zM15 5.25v6.813l-3 1.363-3-1.363V5.25h6zM4.5 9.957V5.344a.094.094 0 01.094-.094H7.5v6.13l-2.945-1.338a.094.094 0 01-.055-.085zM12 21a3 3 0 110-5.999A3 3 0 0112 21zm7.5-11.043a.094.094 0 01-.055.085L16.5 11.38V5.25h2.906a.094.094 0 01.094.094v4.613z"
        fill={fillColor}
      />
    </svg>
  )
}
