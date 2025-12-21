<script setup lang="ts">
defineProps<{
  NYNumber: number;
  //TODO Сделать склонения
  NumberName: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div
      class="text-5xl rounded-2xl border border-gray-400/30 bg-surface w-24 h-24 flex justify-center items-center font-bold"
      >{{ NYNumber }}
    </div>
    <div class="secondary-text">{{ NumberName }}</div>
  </div>
</template>
