import { Dispatch, SetStateAction } from "react";

export interface TocMobileItemProps {
  headingElements: Element[];
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
}
