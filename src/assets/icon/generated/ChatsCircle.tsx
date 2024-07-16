import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ChatsCircle = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M21.757 17.509a7.5 7.5 0 00-5.86-10.704A7.5 7.5 0 102.243 13.01l-.681 2.316a1.5 1.5 0 001.863 1.863l2.316-.681c.744.357 1.542.59 2.36.689a7.5 7.5 0 0010.158 3.81l2.316.682a1.5 1.5 0 001.863-1.862l-.681-2.317zM5.812 14.953a.779.779 0 00-.211.03L3 15.75l.766-2.602a.75.75 0 00-.06-.563 6 6 0 112.463 2.462.75.75 0 00-.357-.094zm14.418 2.694L21 20.25l-2.602-.766a.75.75 0 00-.563.06 6.004 6.004 0 01-8.05-2.333 7.494 7.494 0 006.593-8.8 6 6 0 013.914 8.67.75.75 0 00-.059.566h-.003z"
        fill={fillColor}
      />
    </svg>
  )
}
