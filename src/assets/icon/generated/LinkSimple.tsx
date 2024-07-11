import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const LinkSimple = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15.53 8.47a.748.748 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l6-6a.749.749 0 011.06 0zm4.682-4.682a5.25 5.25 0 00-7.425 0L9.97 6.605a.75.75 0 001.062 1.06l2.818-2.812a3.75 3.75 0 015.303 5.303l-2.819 2.818a.75.75 0 001.06 1.061l2.82-2.822a5.25 5.25 0 000-7.425zM12.97 16.333l-2.818 2.818a3.75 3.75 0 11-5.302-5.303l2.817-2.817a.75.75 0 10-1.061-1.062l-2.818 2.819a5.25 5.25 0 007.426 7.424l2.818-2.819a.75.75 0 10-1.062-1.06z"
        fill={fillColor}
      />
    </svg>
  )
}
