<script setup>
import BioData from "@/components/ThemeOne/BioData.vue";
</script>

<template>
  <aos-vue animation="fade-in" :once="true" :offset="-400">
    <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h2 class="after-effect after:left-52">About Me</h2>
      <div class="lg:hidden">
        <BioData />
      </div>

      <div
        class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden"
      >
        <div class="col-span-12 space-y-2.5">
          <div class="lg:mr-16">
            <p
              v-for="sum in profile.summary"
              class="summary-text text-gray-lite dark:text-color-910 leading-7"
            >
              {{ sum }}
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 class="text-[35px] dark:text-white font-medium pb-5">What I do!</h3>
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div
          v-for="point in profile.points"
          class="about-box"
          :class="`${getColor()} dark:bg-transparent`"
        >
          <img
            class="w-10 h-10 object-contain block"
            :src="point.icon"
            alt=""
          />
          <div class="space-y-2 *break-all">
            <h3 class="dark:text-white text-xl font-semibold">
              {{ point.title }}
            </h3>
            <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
              {{ point.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </aos-vue>
</template>

<script>
import colors from "@/js/color";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      profile: "getProfile",
    }),
  },
  methods: {
    getColor() {
      return colors[Math.floor(Math.random()*colors.length)]
    }
  },
};
</script>

<style scoped>
.summary-text:not(:first-child) {
  margin-top: 1rem;
}
</style>
