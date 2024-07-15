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
    <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button">
      <CheckIcon />
    </Button>
  </div>
)

export const FilledStyleVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="filled" styleVariant="primary">
      Filled Primary
    </Button>
  </div>
)

export const OutlinedStyleVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="outlined" styleVariant="primary">
      Outlined Primary
    </Button>
    <Button styleType="outlined" styleVariant="secondary">
      Outlined Secondary
    </Button>
    <Button styleType="outlined" styleVariant="tertiary">
      Outlined Tertiary
    </Button>
  </div>
)

export const GhostStyleVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="ghost" styleVariant="primary">
      Ghost Primary
    </Button>
    <Button styleType="ghost" styleVariant="secondary">
      Ghost Secondary
    </Button>
  </div>
)

export const IconStyleVariantButton = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button styleType="icon" styleVariant="primary" title="Primary Button" aria-label="Check Primary Button">
      <CheckIcon />
    </Button>
    <Button styleType="icon" styleVariant="secondary" title="Secondary Button" aria-label="Check Secondary Button">
      <CheckIcon />
    </Button>
    <Button styleType="icon" styleVariant="filled" title="Filled Button" aria-label="Check Filled Button">
      <CheckIcon />
    </Button>
    <Button styleType="icon" styleVariant="outlined" title="Outlined Button" aria-label="Check Outlined Button">
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
