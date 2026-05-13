export type Theme = 'dark' | 'light';
export type AccentKey = 'coral' | 'amber' | 'indigo' | 'sage';
export type Spacing = 'compact' | 'default';

export interface Accent {
  key: AccentKey;
  val: string;
  hval: string;
  dim: string;
  css: string;
}
