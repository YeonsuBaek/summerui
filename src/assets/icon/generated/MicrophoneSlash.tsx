import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const MicrophoneSlash = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M20.055 20.496l-15-16.5a.75.75 0 00-1.11 1.008L7.5 8.914V12a4.5 4.5 0 006.48 4.043l1.04 1.143A5.945 5.945 0 0112 18a6.006 6.006 0 01-6-6 .75.75 0 10-1.5 0 7.51 7.51 0 006.75 7.462V22.5a.75.75 0 101.5 0v-3.038a7.39 7.39 0 003.296-1.146l2.899 3.187a.75.75 0 101.11-1.008zM12 15a3 3 0 01-3-3v-1.435l3.906 4.295c-.293.093-.599.14-.906.14zm5.392-.367c.403-.819.61-1.72.608-2.633a.75.75 0 111.5 0 7.422 7.422 0 01-.76 3.293.75.75 0 11-1.348-.66zM7.875 4.207A4.5 4.5 0 0116.5 6v6c0 .157-.008.313-.024.469a.75.75 0 01-.75.672.738.738 0 01-.08 0 .75.75 0 01-.667-.824c.01-.103.016-.21.016-.315V6a3 3 0 00-5.747-1.195.75.75 0 11-1.373-.598z"
        fill={fillColor}
      />
    </svg>
  )
}
