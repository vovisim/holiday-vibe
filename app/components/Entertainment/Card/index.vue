<script setup lang="ts">
import { type IEntertainment } from "#shared/entities/Entertainment";

const { entertainment } = defineProps<{
  entertainment: IEntertainment;
}>();

const imageUrl = computed(() => {
  return new URL(`@/assets/img/${entertainment.img}`, import.meta.url).href;
});
</script>

<template>
  <div class="grid gap-5">
    <img :src="imageUrl" alt="img" />
    <div class="grid gap-3">
      <div class="flex justify-between">
        <div class="">
          {{ entertainment.name }}
        </div>
        <MyIcon :iconName="entertainment.icon" class="text-gray-500" />
      </div>
      <div class="text-gray-400 text-sm">
        {{ entertainment.description }}
      </div>
    </div>
  </div>
</template>
