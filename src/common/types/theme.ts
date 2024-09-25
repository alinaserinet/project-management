type ThemeColor =
  | 'accent'
  | 'background'
  | 'border'
  | 'danger'
  | 'dark'
  | 'heading'
  | 'highlight'
  | 'info'
  | 'light'
  | 'link'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'shadow'
  | 'success'
  | 'surface'
  | 'tertiary'
  | 'text'
  | 'warning';

export type ThemeMode = 'dark' | 'light';

export interface Theme {
  colors: Record<ThemeColor, string>;
}
