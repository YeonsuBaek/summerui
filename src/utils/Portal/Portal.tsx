import { PortalProps } from './Portal.types'
import ReactDOM from 'react-dom'

export const Portal = ({ children, container }: PortalProps) => {
  return ReactDOM.createPortal(children, container || document.body)
}
