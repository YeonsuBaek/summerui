import { PortalProps } from './Portal.types'
import ReactDOM from 'react-dom'

export const Portal = ({ children, container, hasBackdrop = false, onClickBackdrop = () => {} }: PortalProps) => {
  return ReactDOM.createPortal(
    <>
      {hasBackdrop && <div className={`ui-backdrop ${hasBackdrop ? 'gray' : ''}`} onClick={onClickBackdrop} />}
      {children}
    </>,
    container || document.body
  )
}
