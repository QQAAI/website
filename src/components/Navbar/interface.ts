export interface NavItem {
  path: string;
  label: string;
  isCurrent?: boolean;
  external?: boolean;
}

export type ActionButton = {
  path: string;
  label: string;
};