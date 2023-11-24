import type { PostCardType } from "@/app/types/shared";
import type { MotionStyle } from "framer-motion";
export interface PostCardProps extends PostCardType {
  style?: MotionStyle;
}
