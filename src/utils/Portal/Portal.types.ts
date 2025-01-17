import { ReactNode } from 'react'

export interface PortalProps {
  children: ReactNode | ReactNode[]
  container?: Element | null
  hasBackdrop?: boolean
  onClickBackdrop?: () => void
}
