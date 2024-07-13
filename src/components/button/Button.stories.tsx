import { Button } from '.'
import type { Meta } from '@storybook/react'
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, CaretRightIcon, CheckIcon, PlusIcon } from '../../assets/icon'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

export const StyleTypeButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="filled">Filled</Button>
    <Button styleType="outlined">Outlined</Button>
    <Button styleType="ghost">Ghost</Button>
    <Button styleType="icon">
      <CheckIcon />
    </Button>
  </div>
)

export const FilledVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="filled" variant="primary">
      Filled Primary
    </Button>
  </div>
)

export const OutlinedVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="outlined" variant="primary">
      Outlined Primary
    </Button>
    <Button styleType="outlined" variant="secondary">
      Outlined Secondary
    </Button>
    <Button styleType="outlined" variant="tertiary">
      Outlined Tertiary
    </Button>
  </div>
)

export const GhostVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="ghost" variant="primary">
      Ghost Primary
    </Button>
    <Button styleType="ghost" variant="secondary">
      Ghost Secondary
    </Button>
  </div>
)

export const IconVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="icon" variant="primary">
      <CheckIcon />
    </Button>
    <Button styleType="icon" variant="secondary">
      <CheckIcon />
    </Button>
    <Button styleType="icon" variant="filled">
      <CheckIcon />
    </Button>
    <Button styleType="icon" variant="outlined">
      <CheckIcon />
    </Button>
  </div>
)

export const ButtonOfSizes = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="filled" size="small" EndIcon={ArrowRightIcon}>
      Small
    </Button>
    <Button styleType="filled" size="medium" EndIcon={ArrowRightIcon}>
      Medium
    </Button>
    <Button styleType="filled" size="large" EndIcon={ArrowRightIcon}>
      Large
    </Button>
  </div>
)

export const ButtonWithIcons = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="filled" StartIcon={PlusIcon}>
      Start Icon
    </Button>
    <Button styleType="outlined" EndIcon={CaretRightIcon}>
      End Icon
    </Button>
    <Button styleType="ghost" StartIcon={ArrowLeftIcon} EndIcon={CalendarIcon}>
      Both Icons
    </Button>
  </div>
)

export const ButtonWithClickEvent = () => (
  <Button styleType="filled" onClick={() => alert('clicked!')}>
    Click!
  </Button>
)
