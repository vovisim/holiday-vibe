import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const colorMode = useColorMode();
  const isDark = computed(() => colorMode.value === "dark");

  const toggleTheme = () => {
    colorMode.preference = isDark.value ? "light" : "dark";
  };

  return {
    isDark,
    colorMode,
    toggleTheme,
  };
});
