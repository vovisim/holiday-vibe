<script setup lang="ts">
import mainImg from "@/assets/img/main.png";
import { PartyPopper } from "lucide-vue-next";

definePageMeta({
  name: "index",
});
useHead({
  title: "Главная - Holiday Vibe",
});
</script>

<template>
  <main class="container mx-auto flex flex-col pt-20 gap-20">
    <div
      class="h-[600px] flex flex-col justify-center bg-cover bg-center items-center rounded-picture gap-6 text-center"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${mainImg})`,
      }"
    >
      <div
        class="flex gap-2 text-primary p-2 border-primary/50 border bg-primary/15 backdrop-blur-sm w-max rounded-full text-xs"
      >
        <PartyPopper :size="16" />
        <span>2024 is coming</span>
      </div>
      <h1 class="text-7xl drop-shadow-sm font-extrabold grid">
        <span>Пусть начинается</span>
        <span class="text-primary">Волшебство</span>
      </h1>
      <div
        class="text-lg text-gray-200 leading-relaxed mx-auto max-w-xl sm:text-xl"
      >
        Погрузитесь в праздничную атмосферу, найдите свое новогоднее настроение
        и поделитесь теплом с близкими.
      </div>
      <div class="flex gap-3">
        <Button
          class="flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-all hover:bg-red-600 shadow-lg shadow-primary/25 cursor-pointer"
        >
          Получить предсказание
        </Button>
        <Button
          class="flex h-12 items-center justify-center rounded-xl bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 border border-white/10 cursor-pointer"
        >
          Узнать больше
        </Button>
      </div>
    </div>

    <div class="flex flex-col items-center gap-5">
      <div class="text-center text-3xl font-semibold">
        До нового года осталось
      </div>
      <div class="">
        <ClockToNY />
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <div class="">
        <div class="text-4xl font-bold mb-3">Праздничные развлечения</div>
        <div class="text-lg text-gray-400">
          Все, что нужно для идеального праздника, собрано в одном месте.
        </div>
      </div>
      <div class="flex gap-3">
        <EntertainmentCard />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
