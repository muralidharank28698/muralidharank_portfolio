import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface ILibrariesAndFramework {
  name?: string;
  icon?: JSX.Element | string;
}

export interface IEditorTools {
  name?: string;
  icon?: JSX.Element | string;
}