<template>
  <aos-vue
    animation="fade-in"
    :once="true"
    :offset="-400"
    style="padding-bottom: 1px"
  >
    <div class="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div class="lg:py-12">
        <h2 class="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2>
        <ul
          class="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12"
        >
          <li :class="{ 'text-[#FA5252]': filtereKey === null }" class="mr-4 md:mx-4" @click="filterPorto()">All</li>
          <li :class="{ 'text-[#FA5252]': filtereKey === 'Laravel' }" class="mr-4 md:mx-4" @click="filterPorto('Laravel')">Laravel</li>
          <li :class="{ 'text-[#FA5252]': filtereKey === 'VueJS' }" class="mr-4 md:mx-4" @click="filterPorto('VueJS')">VueJS</li>
          <li :class="{ 'text-[#FA5252]': filtereKey === 'WordPress' }" class="mr-4 md:mx-4" @click="filterPorto('WordPress')">WordPress</li>
        </ul>
        <div class="my-masonry-grid">
          <div class="my-masonry-grid_column hidden lg:block">
            <div
              v-for="porto in portoLeft"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <list v-bind:porto="porto" @detail-porto="detailPorto(porto)"/>
            </div>
          </div>
          <div class="my-masonry-grid_column hidden lg:block">
            <div
              v-for="porto in portoRight"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <list v-bind:porto="porto" @detail-porto="detailPorto(porto)"/>
            </div>
          </div>
          <div class="my-masonry-grid_column block lg:hidden">
            <div
              v-for="porto in portfolio"
              class="rounded-lg p-6 dark:border-[2px] border-[#212425]"
              :class="`${getColor()} dark:bg-transparent`"
            >
              <list v-bind:porto="porto" @detail-porto="detailPorto(porto)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aos-vue>

  <modal 
    v-if="project_name != null"
    v-bind:project_name="project_name"
    v-bind:project="project"
    v-bind:framework="framework"
    v-bind:name="name"
    v-bind:link="link"
    v-bind:code="code"
    @close-modal="closePorto"
  />
</template>

<script>
import modal from "@/components/ThemeOne/PortfolioModal.vue";
import list from "@/components/ThemeOne/PortfolioList.vue";
import portfolio from "@/js/portfolio";
import colors from "@/js/color";

export default {
  props: [ 'is_mobile' ],
  components: { modal, list },
  computed: {
    portoLeft() {
      return this.is_mobile
        ? this.portfolio     
        : this.portfolio.filter((v, i) => i % 2 === 0);
    },
    portoRight() {
      return this.portfolio.filter((v, i) => i % 2 === 1);
    },
    portfolio() {
      return this.filtereKey !== null
        ? portfolio.filter((v, i) => v.framework.includes(this.filtereKey))
        : portfolio;
    },
  },
  data() {
    return {
      filtereKey: null,
      project_name: null,
      project: null,
      framework: null,
      name: null,
      link: null,
      code: null,
    };
  },
  methods: {
    filterPorto(key = null) {
      this.filtereKey = key;
    },
    getColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    },
    detailPorto(porto) {
      this.project_name = porto.type
      this.project = porto.project
      this.framework = porto.framework
      this.name = porto.name
      this.link = porto.url
      this.code = porto.code
    },
    closePorto() {
      this.project_name = null
      this.project = null
      this.framework = null
      this.name = null
      this.link = null
      this.code = null
    }
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
