import type { Meta, Story } from '@storybook/react'
import { SegmentedControl, SegmentedControlButtonProps } from '.'
import { HeartIcon, MoonStarsIcon } from '../../assets/icon'

const meta: Meta = {
  title: 'Components/SegmentedControl/SegmentedControlButton',
  component: SegmentedControl.Button,
}

export default meta

export const SegmentedControlButton: Story<SegmentedControlButtonProps> = () => {
  return (
    <>
      <div style={{ padding: '16px', display: 'inline-flex', flexDirection: 'column', gap: '16px' }}>
        <SegmentedControl.Button value="control-1">Control1</SegmentedControl.Button>
        <SegmentedControl.Button value="control-2">
          Control2
          <HeartIcon />
        </SegmentedControl.Button>
        <SegmentedControl.Button value="control-3" disabled>
          Control3
        </SegmentedControl.Button>
        <SegmentedControl.Button value="control-3" disabled>
          Control4
          <MoonStarsIcon />
        </SegmentedControl.Button>
      </div>
      <div
        className="theme-dark"
        style={{ padding: '16px', display: 'inline-flex', flexDirection: 'column', gap: '16px' }}
      >
        <SegmentedControl.Button value="control-1">Control1</SegmentedControl.Button>
        <SegmentedControl.Button value="control-2">
          <HeartIcon />
          Control2
        </SegmentedControl.Button>
        <SegmentedControl.Button value="control-3" disabled>
          Control3
        </SegmentedControl.Button>
        <SegmentedControl.Button value="control-3" disabled>
          <MoonStarsIcon />
          Control4
        </SegmentedControl.Button>
      </div>
    </>
  )
}
