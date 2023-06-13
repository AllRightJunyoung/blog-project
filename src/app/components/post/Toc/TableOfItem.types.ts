import { Dispatch, SetStateAction } from "react";

export type TableOfItemProps = {
  headingElements: Element[];
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
};
