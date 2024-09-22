import { SVGAttributes } from 'react'
interface IconProps extends SVGAttributes<SVGElement> {
  size?: 12 | 16 | 20 | 24 | 32 | 40
  fillColor?: string
}
export const PersonSimpleRun = ({ size = 20, fillColor = '#000', ...props }: IconProps) => {
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
        d="M19 11a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4zm8.414 12.585c-.076.035-.936.41-2.459.41-1.731 0-4.319-.485-7.586-2.5a21.172 21.172 0 01-1.926 4.043 13.037 13.037 0 013.913 1.976C21.74 23.33 23 25.919 23 29a1 1 0 11-2 0c0-5.212-4.336-7.089-6.767-7.731-.07.087-.14.176-.212.262-2.455 2.975-5.53 4.523-8.953 4.523-.39.002-.78-.016-1.168-.054a1.005 1.005 0 11.2-2c3.24.323 6.059-.936 8.375-3.75 1.561-1.892 2.625-4.201 3.156-5.875-4.865-2.831-7.972-.421-8.006-.395a1 1 0 11-1.25-1.56c.188-.15 4.653-3.625 11.189.821 5.684 3.864 8.991 2.539 9.022 2.524a.998.998 0 011.427.873 1 1 0 01-.598.947h-.001z"
        fill={fillColor}
      />
    </svg>
  )
}
