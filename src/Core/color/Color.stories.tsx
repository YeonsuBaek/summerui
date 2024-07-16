import {
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  SYSTEM_DANGER_COLORS,
  SYSTEM_INFORMATION_COLORS,
  SYSTEM_SUCCESS_COLORS,
  SYSTEM_WARNING_COLORS,
} from './ColorList'
import { Colors } from './Colors'

const meta = {
  title: 'Core/Color',
}

export default meta

export const PrimaryColor = () => (
  <>
    <div style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={PRIMARY_COLORS} />
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={PRIMARY_COLORS} />
    </div>
  </>
)

export const NeutralColor = () => {
  return (
    <>
      <div style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
        <Colors list={NEUTRAL_COLORS} type="neutral" />
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
        <Colors list={NEUTRAL_COLORS} type="neutral" />
      </div>
    </>
  )
}

export const DangerColor = () => (
  <>
    <div style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_DANGER_COLORS} />
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_DANGER_COLORS} />
    </div>
  </>
)

export const WarningColor = () => (
  <>
    <div style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_WARNING_COLORS} type="warning" />
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_WARNING_COLORS} type="warning" />
    </div>
  </>
)

export const SuccessColor = () => (
  <>
    <div style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_SUCCESS_COLORS} type="success" />
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_SUCCESS_COLORS} type="success" />
    </div>
  </>
)

export const InformationColor = () => (
  <>
    <div style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_INFORMATION_COLORS} type="information" />
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'inline-flex', gap: '16px' }}>
      <Colors list={SYSTEM_INFORMATION_COLORS} type="information" />
    </div>
  </>
)
