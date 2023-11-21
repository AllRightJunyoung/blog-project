import { Dispatch, SetStateAction } from "react";

export interface TocDesktopItemProps {
  headingElements: Element[];
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
}
