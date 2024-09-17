import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const ThermometerHotFilled = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M14.25 13.695V3.75a3 3 0 00-6 0v9.945a5.25 5.25 0 106 0zm-1.5-8.445h-3v-1.5a1.5 1.5 0 013 0v1.5zm3.872 2.322a.75.75 0 01.218-1.038c1.407-.917 2.52-.445 3.33-.099.736.315 1.182.503 1.92.023a.75.75 0 01.82 1.258c-.609.396-1.16.534-1.658.534-.656 0-1.211-.238-1.671-.434-.737-.316-1.183-.503-1.921-.024a.75.75 0 01-1.038-.22zm6.506 2.106a.75.75 0 01-.218 1.038c-.609.396-1.16.534-1.658.534-.656 0-1.211-.238-1.671-.434-.738-.315-1.183-.504-1.921-.024a.75.75 0 01-.82-1.257c1.407-.918 2.52-.445 3.33-.1.737.316 1.182.506 1.92.024a.75.75 0 011.038.219z"
        fill={fillColor}
      />
    </svg>
  )
}
