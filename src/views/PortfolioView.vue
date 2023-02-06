<template>
  <aos-vue animation="fade-in" :once="true" :offset="-400" style="padding-bottom: 1px;">
    <div class="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div class="lg:py-12">
        <h2 class="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2>
        <ul
          class="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12"
        >
          <li :class="{ 'text-[#FA5252]': filtereKey === null }" class="mr-4 md:mx-4" @click="filterPorto()">All</li>
          <li :class="{ 'text-[#FA5252]': filtereKey === 'Laravel' }" class="mr-4 md:mx-4" @click="filterPorto('Laravel')">Laravel</li>
          <li :class="{ 'text-[#FA5252]': filtereKey === 'WordPress' }" class="mr-4 md:mx-4" @click="filterPorto('WordPress')">WordPress</li>
        </ul>
        <div class="my-masonry-grid">
          <div class="my-masonry-grid_column">
            <div
              v-for="(porto) in portoLeft"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425] "
              :class="`${getColor()} dark:bg-transparent`"
            >
              <div class="overflow-hidden rounded-lg">
                <img
                  alt="{{ porto.name }}"
                  :src="'/src/assets/images/portfolio/' + porto.code + '/1.jpeg'"
                  width="300"
                  height="300"
                  decoding="async"
                  data-nimg="1"
                  class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                  style="color: transparent"
                />
              </div>
              <span
                class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                >{{ porto.type }}</span
              >
              <h2
                class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
              >
                {{ porto.name }}
              </h2>
            </div>
          </div>
          <div class="my-masonry-grid_column">
            <div
              v-for="(porto) in portoRight"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <div class="overflow-hidden rounded-lg">
                <img
                  alt="{{ porto.name }}"
                  :src="'/src/assets/images/portfolio/' + porto.code + '/1.jpeg'"
                  width="300"
                  height="300"
                  decoding="async"
                  data-nimg="1"
                  class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                  style="color: transparent"
                />
              </div>
              <span
                class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                >{{ porto.type }}</span
              >
              <h2
                class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
              >
                {{ porto.name }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aos-vue>
</template>

<script>
import portfolio from "@/js/portfolio";
import colors from "@/js/color";

export default {
  computed: {
    portoLeft() {
      return this.portfolio.filter((v, i) => i % 2 === 0);
    },
    portoRight() {
      return this.portfolio.filter((v, i) => i % 2 === 1);
    },
    portfolio() {
      return this.filtereKey !== null
        ? portfolio.filter((v, i) => v.type === this.filtereKey )
        : portfolio;
    }
  },
  data() {
    return {
      filtereKey: null
    }
  },
  methods: {
    filterPorto(key = null) {
      this.filtereKey = key
    },
    getColor() {
      return colors[Math.floor(Math.random()*colors.length)]
    }
  }
};
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>