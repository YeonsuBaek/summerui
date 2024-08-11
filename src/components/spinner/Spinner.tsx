import { SpinnerProps } from './Spinner.types'

export const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  return (
    <div className={`ui-spinner ${size}`}>
      <div className={`ui-spinner-ling ${size}`} />
    </div>
  )
}
