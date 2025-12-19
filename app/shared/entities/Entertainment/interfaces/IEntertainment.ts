import * as LucideIcons from "lucide-vue-next";

export interface IEntertainment {
  name: string;
  icon: keyof typeof LucideIcons;
  description: string;
  img: string;
}
