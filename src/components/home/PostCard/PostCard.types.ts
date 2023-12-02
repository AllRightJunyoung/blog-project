import type { PostCardType } from "@/types/shared";
import type { MotionStyle } from "framer-motion";
export interface PostCardProps extends PostCardType {
  style?: MotionStyle;
  blurURL: string;
}
