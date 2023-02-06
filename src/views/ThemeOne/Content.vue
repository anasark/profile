<script setup>
import { RouterLink, RouterView } from "vue-router";
import BioData from "@/components/ThemeOne/BioData.vue";
import Menu from "@/components/ThemeOne/Menu.vue";
</script>

<template>
  <div
    class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[140px]"
  >
    <div
      class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44"
    >
      <BioData />
    </div>
    <div class="col-span-12 lg:col-span-8">
      <header
        class="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]"
      >
        <nav class="hidden lg:block">
          <ul class="flex">
            <Menu v-bind:is_mobile="false" />
          </ul>
        </nav>
      </header>

      <section>
        <div class="lg:rounded-2xl bg-white dark:bg-[#111111]">
          <RouterView />
        </div>
      </section>
    </div>
  </div>
</template>
