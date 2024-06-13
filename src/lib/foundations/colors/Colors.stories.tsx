import type { Meta } from '@storybook/react'
import { DarkColors } from './DarkColorSetList'
import { LightColors } from './LightColorSetList'

const meta = {
  title: 'Foundation/Colors',
}

export default meta

export const LightColorSet = () => <LightColors />
export const DarkColorSet = () => <DarkColors />
