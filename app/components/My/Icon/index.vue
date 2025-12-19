<script setup lang="ts">
import * as LucideIcons from "lucide-vue-next";

const props = defineProps<{
  iconName: keyof typeof LucideIcons;
  size?: number;
}>();
const IconComponent = LucideIcons[props.iconName];
</script>

<template>
  <component :is="IconComponent" class="text-primary" :size="size ?? 24" />
</template>
