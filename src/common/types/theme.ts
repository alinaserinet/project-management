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

export type ThemeBreakpoint = 'lg' | 'md' | 'sm' | 'xl';
export type ThemeSpacing = 'large' | 'medium' | 'small';

export interface Theme {
  colors: Record<ThemeColor, string>;
  breakpoints: Record<ThemeBreakpoint, string>;
  spacing: Record<ThemeSpacing, string>;
}
