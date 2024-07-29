import type { Meta } from '@storybook/react'
import { SegmentedControl } from '.'
import { useState } from 'react'
import { HeartIcon, InfoFilledIcon, MoonStarsIcon, WarningFilledIcon } from '../../assets/icon'

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
}

export default meta

export const SizesOfSegmentedControl = () => {
  const [smallSelectedValue, setSmallSelectedValue] = useState('control-1')
  const [mediumSelectedValue, setMediumSelectedValue] = useState('control-1')
  const [largeSelectedValue, setLargeSelectedValue] = useState('control-1')

  return (
    <>
      <div style={{ padding: '16px' }}>
        <SegmentedControl size="small" selectedValue={smallSelectedValue} onChange={setSmallSelectedValue}>
          <SegmentedControl.Button value="control-1">Small Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Small Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Small Control 3</SegmentedControl.Button>
        </SegmentedControl>
        <br />
        <br />
        <SegmentedControl selectedValue={mediumSelectedValue} onChange={setMediumSelectedValue}>
          <SegmentedControl.Button value="control-1">Medium Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Medium Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Medium Control 3</SegmentedControl.Button>
        </SegmentedControl>
        <br />
        <br />
        <SegmentedControl size="large" selectedValue={largeSelectedValue} onChange={setLargeSelectedValue}>
          <SegmentedControl.Button value="control-1">Large Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Large Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Large Control 3</SegmentedControl.Button>
        </SegmentedControl>
      </div>
      <div className="theme-dark" style={{ padding: '16px' }}>
        <SegmentedControl size="small" selectedValue={smallSelectedValue} onChange={setSmallSelectedValue}>
          <SegmentedControl.Button value="control-1">Small Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Small Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Small Control 3</SegmentedControl.Button>
        </SegmentedControl>
        <br />
        <br />
        <SegmentedControl selectedValue={mediumSelectedValue} onChange={setMediumSelectedValue}>
          <SegmentedControl.Button value="control-1">Medium Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Medium Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Medium Control 3</SegmentedControl.Button>
        </SegmentedControl>
        <br />
        <br />
        <SegmentedControl size="large" selectedValue={largeSelectedValue} onChange={setLargeSelectedValue}>
          <SegmentedControl.Button value="control-1">Large Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Large Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Large Control 3</SegmentedControl.Button>
        </SegmentedControl>
      </div>
    </>
  )
}
export const ResizingOfSegmentedControl = () => {
  const [selectedValue, setSelectedValue] = useState('control-1')

  return (
    <>
      <div style={{ padding: '16px' }}>
        <SegmentedControl resizing="hug" size="small" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Hug Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Hug Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Hug Control 3</SegmentedControl.Button>
        </SegmentedControl>
        <br />
        <br />
        <SegmentedControl resizing="fill" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Fill Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Fill Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Fill Control 3</SegmentedControl.Button>
        </SegmentedControl>
      </div>
      <div className="theme-dark" style={{ padding: '16px' }}>
        <SegmentedControl resizing="hug" size="small" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Hug Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Hug Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Hug Control 3</SegmentedControl.Button>
        </SegmentedControl>
        <br />
        <br />
        <SegmentedControl resizing="fill" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Fill Control 1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Fill Control 2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3">Fill Control 3</SegmentedControl.Button>
        </SegmentedControl>
      </div>
    </>
  )
}

export const Example = () => {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <>
      <div style={{ padding: '16px', display: 'inline-flex', flexDirection: 'column', gap: '16px' }}>
        <SegmentedControl size="small" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">
            <HeartIcon /> Control1
          </SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Control2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3" disabled>
            <InfoFilledIcon /> Control3
          </SegmentedControl.Button>
        </SegmentedControl>
        <SegmentedControl selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Control1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Control2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3" disabled>
            Control3
          </SegmentedControl.Button>
        </SegmentedControl>
        <SegmentedControl size="large" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Control1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Control2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3" disabled>
            Control3
          </SegmentedControl.Button>
        </SegmentedControl>
      </div>
      <div className="theme-dark" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SegmentedControl size="small" resizing="fill" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Control1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">
            <WarningFilledIcon /> Control2
          </SegmentedControl.Button>
          <SegmentedControl.Button value="control-3" disabled>
            <MoonStarsIcon /> Control3
          </SegmentedControl.Button>
        </SegmentedControl>
        <SegmentedControl resizing="fill" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Control1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Control2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3" disabled>
            Control3
          </SegmentedControl.Button>
        </SegmentedControl>
        <SegmentedControl size="large" resizing="fill" selectedValue={selectedValue} onChange={setSelectedValue}>
          <SegmentedControl.Button value="control-1">Control1</SegmentedControl.Button>
          <SegmentedControl.Button value="control-2">Control2</SegmentedControl.Button>
          <SegmentedControl.Button value="control-3" disabled>
            Control3
          </SegmentedControl.Button>
        </SegmentedControl>
      </div>
    </>
  )
}
