import {
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  SYSTEM_DANGER_COLORS,
  SYSTEM_INFORMATION_COLORS,
  SYSTEM_SUCCESS_COLORS,
  SYSTEM_WARNING_COLORS,
} from './ColorList'
import { DarkColors } from './DarkColorSetList'
import { LightColors } from './LightColorSetList'

const meta = {
  title: 'Core/Color',
}

export default meta

export const PrimaryColor = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <LightColors list={PRIMARY_COLORS} />
    <DarkColors list={PRIMARY_COLORS} />
  </div>
)

export const NeutralColor = () => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <LightColors list={NEUTRAL_COLORS} type="neutral" />
      <DarkColors list={NEUTRAL_COLORS} type="neutral" />
    </div>
  )
}

export const DangerColor = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <LightColors list={SYSTEM_DANGER_COLORS} type="danger" />
    <DarkColors list={SYSTEM_DANGER_COLORS} type="danger" />
  </div>
)

export const WarningColor = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <LightColors list={SYSTEM_WARNING_COLORS} type="warning" />
    <DarkColors list={SYSTEM_WARNING_COLORS} type="warning" />
  </div>
)

export const SuccessColor = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <LightColors list={SYSTEM_SUCCESS_COLORS} type="success" />
    <DarkColors list={SYSTEM_SUCCESS_COLORS} type="success" />
  </div>
)

export const InformationColor = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <LightColors list={SYSTEM_INFORMATION_COLORS} type="information" />
    <DarkColors list={SYSTEM_INFORMATION_COLORS} type="information" />
  </div>
)
