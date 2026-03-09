import type { tagKeys } from "@/lib/tags";

export interface ProjectProps {
  title: string;
  role: string;
  description: string;
  link: string;
  technologies: string[];
  tags?: tagKeys[];
}
