import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const EarSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20.055 19.746a.751.751 0 11-1.11 1.008l-3.281-3.604A2.25 2.25 0 0112.75 15c-.001-.316.037-.63.113-.938L9 9.813a.75.75 0 11-1.5-.062c0-.46.07-.917.208-1.356L6.047 6.562A6.7 6.7 0 005.25 9.75c0 2.503.8 3.274 1.647 4.091.81.784 1.728 1.666 1.728 3.784A3.375 3.375 0 0012 21c.96 0 1.73-.39 2.422-1.227a.75.75 0 111.156.954C14.608 21.904 13.406 22.5 12 22.5a4.88 4.88 0 01-4.875-4.875c0-1.48-.532-1.994-1.27-2.704-.937-.905-2.105-2.03-2.105-5.171a8.18 8.18 0 011.238-4.348L3.945 4.254a.75.75 0 111.11-1.008l15 16.5zM8.54 3.953A6.75 6.75 0 0118.75 9.75a.75.75 0 101.5 0A8.25 8.25 0 007.77 2.666a.75.75 0 10.77 1.287zm6.49 7.97a.75.75 0 001.01-.323 3.93 3.93 0 00.46-1.85 4.5 4.5 0 00-5.96-4.258.75.75 0 00.487 1.42A3 3 0 0115 9.75c0 .404-.1.801-.293 1.157a.75.75 0 00.323 1.01v.005z"
        fill={fillColor}
      />
    </svg>
  )
}