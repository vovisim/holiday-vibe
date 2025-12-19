<script setup lang="ts">
import { Snowflake } from "lucide-vue-next";
import { type HeaderLink } from "#shared/interfaces/HeaderLink";

const links: HeaderLink[] = [
  { label: "Главная", to: { name: "index" } },
  { label: "Музыка и фильмы", to: "media" },
  { label: "Картинки", to: "images" },
  { label: "Советы и идеи", to: "ideas" },
  { label: "Места", to: "places" },
];
</script>

<template>
  <header
    class="container justify-between min-h-16 items-center flex mx-auto relative"
  >
    <div class="flex gap-4 w-max items-center">
      <Snowflake class="text-primary" :size="27" />
      <div class="text-xl font-semibold">Snow Vibe</div>
    </div>
    <nav class="flex gap-20">
      <NuxtLink
        v-for="(link, index) in links"
        :key="`${link.label}-${index}`"
        :to="link.to"
        class="relative text-muted transition-colors hover:text-primary duration-300"
        active-class="text-primary font-semibold"
        exact-active-class="text-primary font-semibold"
      >
        {{ link.label }}

        <span
          class="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-primary transition-transform duration-300"
          :class="{ 'scale-x-100': $route.path === link.to }"
        />
      </NuxtLink>
    </nav>

    <div class="w-0"></div>
  </header>
</template>
