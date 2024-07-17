import type { Meta } from '@storybook/react'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
}

export default meta

export const SizeOfRadio = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio id="storybook-radio-small-checked" size="small" name="small" value="small-1" checked>
        small radio
      </Radio>
      <Radio id="storybook-radio-medium-checked" name="medium" value="medium-1" checked>
        medium radio
      </Radio>
      <Radio id="storybook-radio-large-checked" size="large" name="large" value="large-1" checked>
        large radio
      </Radio>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio id="storybook-radio-small-checked" size="small" name="small-dark" value="small-1" checked>
        small radio
      </Radio>
      <Radio id="storybook-radio-medium-checked" name="medium-dark" value="medium-1" checked>
        medium radio
      </Radio>
      <Radio id="storybook-radio-large-checked" size="large" name="large-dark" value="large-1" checked>
        large radio
      </Radio>
    </div>
  </>
)

export const StatesOfRadio = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio id="storybook-radio-checked" name="checked" value="checked" checked>
        checked radio
      </Radio>
      <Radio id="storybook-radio-unchecked" name="checked" value="unchecked">
        unchecked radio
      </Radio>
      <Radio id="storybook-radio-checked-disabled" name="disabled" value="checked-disabled" checked disabled>
        checked disabled radio
      </Radio>
      <Radio id="storybook-radio-unchecked-disabled" name="disabled" value="unchecked-disabled" disabled>
        unchecked disabled radio
      </Radio>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio id="storybook-radio-checked" name="checked-dark" value="checked" checked>
        checked radio
      </Radio>
      <Radio id="storybook-radio-unchecked" name="checked-dark" value="unchecked">
        unchecked radio
      </Radio>
      <Radio id="storybook-radio-checked-disabled" name="disabled-dark" value="checked-disabled" checked disabled>
        checked disabled radio
      </Radio>
      <Radio id="storybook-radio-unchecked-disabled" name="disabled-dark" value="unchecked-disabled" disabled>
        unchecked disabled radio
      </Radio>
    </div>
  </>
)
