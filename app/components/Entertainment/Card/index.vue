<script setup lang="ts">
import { type IEntertainment } from "#shared/entities/Entertainment";

const { entertainment } = defineProps<{
  entertainment: IEntertainment;
}>();
</script>

<template>
  <div class="grid gap-5">
    <div class="">
      <slot name="img"></slot>
    </div>
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
