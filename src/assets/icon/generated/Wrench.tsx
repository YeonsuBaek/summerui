import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const Wrench = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
  return (
    <svg {...props} width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21.259 6.469a.749.749 0 00-1.204-.27l-3.778 3.486-1.615-.347-.347-1.615L17.8 3.945a.749.749 0 00-.27-1.204A6.75 6.75 0 008.25 9c-.001.933.19 1.857.563 2.713l-5.645 4.88-.04.037a3 3 0 104.28 4.204l4.879-5.646A6.75 6.75 0 0021.75 9a6.708 6.708 0 00-.491-2.531zM15 14.25a5.263 5.263 0 01-2.538-.656.75.75 0 00-.93.166l-5.24 6.07a1.5 1.5 0 01-2.121-2.122l6.065-5.24a.75.75 0 00.166-.93 5.25 5.25 0 015.47-7.717l-2.924 3.17a.75.75 0 00-.182.666l.53 2.468a.75.75 0 00.576.576l2.47.53a.75.75 0 00.666-.182l3.17-2.925A5.256 5.256 0 0115 14.25z"
        fill={fillColor}
      />
    </svg>
  )
}
