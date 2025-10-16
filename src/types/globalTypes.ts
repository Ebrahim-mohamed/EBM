import { ReactNode } from "react";

export type heroType = {
  header: ReactNode;
  location: string;
  pra?: string;
  button1?: string;
  to1?: string;
  button2?: string;
  to2?: string;
  isCenter?: boolean;
};
export type headerType = {
  header: ReactNode;
  pra?: string;
  isNotCenter?: boolean;
};
export type endSectionType = {
  header: ReactNode;
  button: string;
  to: string;
  pageName: string;
};
