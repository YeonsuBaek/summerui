import { Button } from '.'
import type { Meta } from '@storybook/react'
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, CaretRightIcon, CheckIcon, PlusIcon } from '../../assets/icon'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

export const StyleTypeButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled">Filled</Button>
      <Button styleType="outlined">Outlined</Button>
      <Button styleType="ghost">Ghost</Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button">
        <CheckIcon />
      </Button>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled">Filled</Button>
      <Button styleType="outlined">Outlined</Button>
      <Button styleType="ghost">Ghost</Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button">
        <CheckIcon />
      </Button>
    </div>
  </>
)

export const FilledStyleVariantButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" styleVariant="primary">
        Filled Primary
      </Button>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" styleVariant="primary">
        Filled Primary
      </Button>
    </div>
  </>
)

export const OutlinedStyleVariantButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
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
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
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
  </>
)

export const GhostStyleVariantButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="ghost" styleVariant="primary">
        Ghost Primary
      </Button>
      <Button styleType="ghost" styleVariant="secondary">
        Ghost Secondary
      </Button>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="ghost" styleVariant="primary">
        Ghost Primary
      </Button>
      <Button styleType="ghost" styleVariant="secondary">
        Ghost Secondary
      </Button>
    </div>
  </>
)

export const IconStyleVariantButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="icon" styleVariant="normal" title="Primary Button" aria-label="Check Primary Button">
        <CheckIcon size={24} />
      </Button>
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
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="icon" styleVariant="normal" title="Primary Button" aria-label="Check Primary Button">
        <CheckIcon size={24} />
      </Button>
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
  </>
)

export const ButtonOfSizes = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
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
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
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
  </>
)

export const ButtonWithIcons = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
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
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
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
  </>
)

export const ButtonWithClickEvent = () => (
  <Button styleType="filled" onClick={() => alert('clicked!')}>
    Click!
  </Button>
)

export const DangerButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="danger">
        Filled
      </Button>
      <Button styleType="outlined" color="danger">
        Outlined
      </Button>
      <Button styleType="ghost" color="danger">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="danger">
        <CheckIcon />
      </Button>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="danger">
        Filled
      </Button>
      <Button styleType="outlined" color="danger">
        Outlined
      </Button>
      <Button styleType="ghost" color="danger">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="danger">
        <CheckIcon />
      </Button>
    </div>
  </>
)
export const WarningButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="warning">
        Filled
      </Button>
      <Button styleType="outlined" color="warning">
        Outlined
      </Button>
      <Button styleType="ghost" color="warning">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="warning">
        <CheckIcon />
      </Button>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="warning">
        Filled
      </Button>
      <Button styleType="outlined" color="warning">
        Outlined
      </Button>
      <Button styleType="ghost" color="warning">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="warning">
        <CheckIcon />
      </Button>
    </div>
  </>
)
export const SuccessButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="success">
        Filled
      </Button>
      <Button styleType="outlined" color="success">
        Outlined
      </Button>
      <Button styleType="ghost" color="success">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="success">
        <CheckIcon />
      </Button>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="success">
        Filled
      </Button>
      <Button styleType="outlined" color="success">
        Outlined
      </Button>
      <Button styleType="ghost" color="success">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="success">
        <CheckIcon />
      </Button>
    </div>
  </>
)
export const InformationButton = () => (
  <>
    <div style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="information">
        Filled
      </Button>
      <Button styleType="outlined" color="information">
        Outlined
      </Button>
      <Button styleType="ghost" color="information">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="information">
        <CheckIcon />
      </Button>
    </div>
    <div className="theme-dark" style={{ padding: '16px', display: 'flex', gap: '16px' }}>
      <Button styleType="filled" color="information">
        Filled
      </Button>
      <Button styleType="outlined" color="information">
        Outlined
      </Button>
      <Button styleType="ghost" color="information">
        Ghost
      </Button>
      <Button styleType="icon" title="Icon Button" aria-label="Check Icon Button" color="information">
        <CheckIcon />
      </Button>
    </div>
  </>
)
