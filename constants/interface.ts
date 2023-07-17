export interface NavItem {
  label: string;
  children?: SubItem[];
  href?: string;
  nextpage?: boolean;
}

export interface SubItem {
  label?: string;
  value?: string;
  nextpage?: boolean;
  href?: string;
}

export type ChakraType =
  | undefined
  | string
  | {
      base?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      "2xl"?: string;
    };
