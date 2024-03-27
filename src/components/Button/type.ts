export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | 'text'
  | 'default'
export type ButtonSize = 'small' | 'medium' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  disabled?: boolean
  round?: boolean
  circle?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  // loading?: boolean
  // icon?: string
  onClick?: (e: MouseEvent) => void
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
