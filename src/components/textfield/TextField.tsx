import { InfoIcon, WarningIcon } from '../../assets/icon'
import { IconProps } from '../../assets/icon/icon.types'
import { Button } from '../button'
import { TextFieldProps, TextFieldType, TextFieldValue } from './TextField.types'
import { useRef, useEffect, ChangeEvent, ComponentType } from 'react'

export const TextField = <Type extends TextFieldType = 'text'>({
  id,
  value,
  onChange = () => {},
  size = 'medium',
  type,
  placeholder = '',
  label = '',
  helperText = '',
  isError = false,
  errorText = '',
  required = false,
  autoFocus = false,
  readOnly = false,
  disabled = false,
  ButtonIcon,
  onClickButton = () => {},
  ...props
}: TextFieldProps<Type>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const isDisabled = disabled || readOnly

  const displayedHelperText = isError && errorText ? errorText : helperText

  const HelperIcon: ComponentType<IconProps> = isError ? WarningIcon : InfoIcon

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      const current = inputRef.current
      current.focus()
    }
  }, [autoFocus])

  return (
    <div className="ui-textfield">
      {label && (
        <label className="ui-textfield-label" htmlFor={id}>
          {label}
          {required && <span className="ui-textfield-required">*</span>}
        </label>
      )}
      <div
        className={`ui-textfield-input ${size} ${readOnly ? 'read-only' : ''} ${disabled ? 'is-disabled' : ''} ${
          isError ? 'is-error' : ''
        }`}
      >
        <input
          id={id}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value as TextFieldValue<Type>)}
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          ref={inputRef}
          aria-describedby={displayedHelperText ? `${id}-msg` : undefined}
          {...props}
        />
        {ButtonIcon && (
          <Button styleType="icon" styleVariant="normal" size={size} onClick={onClickButton} disabled={isDisabled}>
            <ButtonIcon />
          </Button>
        )}
      </div>
      {displayedHelperText && (
        <p id={`${id}-msg`} className={`ui-textfield-msg ${isError ? 'error' : ''}`}>
          <HelperIcon size={12} aria-hidden />
          {displayedHelperText}
        </p>
      )}
    </div>
  )
}
