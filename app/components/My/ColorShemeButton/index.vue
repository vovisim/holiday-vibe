<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";

const colorMode = useColorMode();
const themeStore = useThemeStore();
</script>

<template>
  <div class="">
    <Button variant="outline" @click="themeStore.toggleTheme()">
      <Sun v-if="themeStore.isDark" />
      <Moon v-else />
    </Button>
  </div>
</template>
